const https = require('https');
const querystring = require('querystring');

const retrieveResourse = async (postData) => {

    let retryCount = 1;
    const MAX_RETRY = 5;
    let response = null;
    let queryParams = "";
    if (typeof postData === "object" && postData !== null) {
        queryParams = "?req=" + JSON.stringify(postData);
    }
    if (postData.length > 0) {
        queryParams = "?req=" + postData;
    }
    console.log(typeof postData);
    console.log(postData);
    let url = "https://script.google.com/macros/s/AKfycbx5NNMEeJwjK5f7LmWUPy61VcjAc7xsJH_kvIyjQuXLZEZaJix_BkNrW5Ro5ZAkwUoa/exec" + queryParams
    while(true) {
        if(retryCount > MAX_RETRY) {
            // 5回やってダメなら諦める
            response = { success: false, reason: "Retry Count Exceeded"};
            break;
        }

        // カウントの更新
        retryCount++;

        const promise = new Promise((resolve, reject) => {
            https.get(url, (res) => {
                const { statusCode } = res;
                console.log(statusCode);
                if(statusCode === 302) {
                    // リダイレクトするのでもう一度ループする。
                    resolve({
                        statusCode,
                        url: res.headers.location,  // リダイレクト先のURL
                    });
                    return;
                }
                if(statusCode === 200) {
                    // データを受け取り終了
                    let data = "";
                    res.setEncoding("utf8");
                    res.on("data", (chunk) => {
                        console.log(chunk);
                        data += chunk;
                    });
                    res.on("end", () => {
                        resolve({
                            statusCode,
                            data,
                        });
                        return;
                    });
                    return;
                }
                // 他のステータスコードは想定外
                resolve({
                    statusCode,
                });
            });
        });

        // 上のpromiseの終了を待つ。
        const result = await promise.catch((reason) => {
            // レスポンス以外のエラー(get自体に失敗など)
            return { statusCode: 0, reason }
        });

        if(result.statusCode === 302) {
            // もう1回ループする必要あり
            url = result.url;
            continue;
        }
        if(result.statusCode === 200) {
            // 取得できた
            response = {
                success: true,
                data: result.data,
            };
            break;
        }
        // エラーハンドリングする
        console.log("不明なエラー？");
        // 一応リトライ
        continue;
        // もしくはresponseを生成して終了させる
        // response = {
        //     success: false,
        //     reason: result.reason,
        // };
        // break;
    }
    return response;
}

exports.handler =  async function(event, context){
    console.log(event["body-json"])
    console.log(event["header"])
    const requestBodyString = event["body-json"]

    const res =  await retrieveResourse(requestBodyString)
    console.log(res.data)
    if (res !== null && res.success) {
        console.log(res.data)
        return JSON.parse(res.data)
    } else {
        console.log("取得失敗:", res.reason)
    }
};

