module.exports = {
    helpers: {
        // 生成 yyyy-MM-dd 文章标题的日期部分
        date: () => new Date().toISOString().slice(0, 10)
    }
};