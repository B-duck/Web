//Ajax类
class Ajax {
    constructor(url, options) {
        this.url = url;
        this.options = Object.assign({}, DEFAULTS, options);

        //初始化
        this.init();
    }

    init() {
        const xhr = new XMLHttpRequest();
        this.xhr = xhr;
        this.bindEvents();
        xhr.open(this.options.method, this.url + this.addParam(), true);
        xhr.responseType = this.options.responseType;
        this.setTimeout();
        this.sendData();
    }
    bindEvents() {
        const xhr = this.xhr;
        const { success, CodeError } = this.options;
        xhr.addEventListener(
            'load',
            () => {
                if (this.ok()) {
                    success(xhr.response, xhr);
                } else {
                    CodeError(xhr.status, xhr);
                }
            }
        )
    }
    ok() {
        const xhr = this.xhr;
        return (xhr.status >= 200 & xhr.status < 300) || xhr.status === 304;
    }
    setTimeout() {
        const { timeoutTime } = this.options;
        if (timeoutTime > 0) {
            this.xhr.timeout = timeoutTime;
        }
    }

    sendData() {
        const xhr = this.xhr;
        if (!this.isSendData()) {
            return xhr.send(null);
        }
    }

    isSendData() {
        const { data, method } = this.options;
        if (!data) return false;
        if (method === 'GET') return false;

    }
}
export default Ajax;