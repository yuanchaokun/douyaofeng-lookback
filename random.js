const pages = Array.from({length: 71}, (_, i) => `content_${i + 1}.html`);

function randomRedirect() {
    // 获取当前页面名称
    const currentPage = window.location.pathname.split('/').pop();
    
    // 过滤掉当前页面，避免跳转到同一页
    const availablePages = pages.filter(page => page !== currentPage);
    
    // 随机选择一个新页面
    const randomPage = availablePages[Math.floor(Math.random() * availablePages.length)];
    
    // 添加按钮动画效果
    const button = document.querySelector('.random-button') || document.querySelector('.float-random-button');
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    }
    
    // 延迟跳转
    setTimeout(() => {
        window.location.href = randomPage;
    }, 200);
}
