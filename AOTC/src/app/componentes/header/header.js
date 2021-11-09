addEventListener('DOMContentLoaded', () => {
    const btn_menu  = document.querySelector('.coll')
    if(btn_menu){
        btn_menu.addEventListener('click', () =>{
            const menu = document.querySelector('.nav2')
            menu.classList.toggle('star');
        })
    }
});
