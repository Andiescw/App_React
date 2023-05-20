let products = [
    { id: '1' ,category: "Printed", name: "Flyer" ,price: '50' ,stock: 8 ,photo: './flyer1.jpg' ,description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { id: '2' ,category: "Printed", name: "Postal" ,price: '10' ,stock: 5 ,photo: './postcard.png' ,description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { id: '3' ,category: "Printed", name: "Poster" ,price: '80' ,stock: 10 ,photo: './poster.jpg' ,description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { id: '4' ,category: "Digital", name: "Fondo de Pantalla Grande" ,price: '30' ,stock: 20 ,photo: './desktopbg.jpg' ,description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { id: '5' ,category: "Digital", name: "Notion Template" ,price: '100' ,stock: 8 ,photo: './notion.png' ,description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
]

export const mFetch = (id) =>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res(!id ? products : products.find(product => product.id === id))
        }, 2000)
    })
}
