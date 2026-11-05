const testimonials = [
    {
        name: "User name", 
        photoUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum reiciendis praesentium architecto, similique et repudiandae, eius quas nihil sunt aliquid? Ipsam totam corporis reiciendis laudantium voluptate unde obcaecati et?"
    },
    {
        name: "Truong Tuan Dung", 
        photoUrl: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/616083594_2568785813506106_6894652160169723176_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XdsqWisV81wQ7kNvwGLOSIs&_nc_oc=Adpr_9Q3V8bM4ZvxJ-ieUA3WXRZ5fhqSmPeD--C2qq9sM-7jGsQuEVK7YfeDzaA0Ssm5T6_yN2Ug2ZI4iGqyM5Ft&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=DDSpYSuHnCUfry7P0Ns3oQ&_nc_ss=7b2a8&oh=00_AQTGkAnv_0I-OLfqUXVx3NmaRWELNnN23FAQt2h-JlskVg&oe=6AF24CFE",
        text: "Còn đâu những lời hứa, hẹn hò dưới mưa, nơi con phố lưa thưa, khi nắng cuối mùa, làm sao để xóa đi những thói quen của ngày xưa. Nhìn vào đôi mắt của nhau đừng lừa dối nhau, những ký ức đậm sâu giờ đã bạc màu, đành kết thúc cho quên đi nỗi buồn về sau."
    },
    {
        name: "I belived i can fly", 
        photoUrl: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum reiciendis praesentium architecto, similique et repudiandae, eius quas nihil sunt aliquid?"
    }
]

const img = document.querySelector("img");
const text = document.querySelector(".text");
const username = document.querySelector(".username");

let indexUser = 0;

//
updateTestimonial()
function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[indexUser];
    img.src = photoUrl;
    text.innerText = text;
    username.innerText = name;
    indexUser++;
    setTimeout(() => {
        updateTestimonial()
    }, 5000);
    
    if(indexUser === testimonials.length){
        indexUser = 0;
    }
}
