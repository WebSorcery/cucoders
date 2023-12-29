function find(url, posts) {
    return posts.findIndex(post => post.url === url);
}
function driveLink(posts){
    return posts
            .map((post, index) => ({ url: post.url, index }))
            .filter(({ url }) => !url.startsWith("https://res.cloud"))
            .map(({ index }) => index);
}
export const getArray=(array,index,posts)=>{
    let post=[];
    const result=array[index];
    result.resources.forEach((res) => {
        let ind=find(res.secure_url, posts)
        if (ind != -1 && ind>=0) {
            post.push({
                imageSrc:posts[ind].imageSrc,
                title:posts[ind].title,
                description:posts[ind].description,
                url: res.secure_url,
                category: res.format == "pdf" ? "Book" : "Image",
                date: res.created_at.slice(0, 10),
            });
        }
        else{
            post.push({
                imageSrc:posts[0].imageSrc,
                title:"title_of_file",
                description:"description_of_file",
                url: res.secure_url,
                category: res.format == "pdf" ? "Book" : "Image",
                date: res.created_at.slice(0, 10),
            });
    }
}
    )
    let drive_arr=driveLink(posts);
        for (let i=0;i<drive_arr.length;i++){
            post.push({
            imageSrc:posts[drive_arr[i]].imageSrc,
            title:posts[drive_arr[i]].title,
            description:posts[drive_arr[i]].description,
            url: posts[drive_arr[i]].url,
            category: posts[drive_arr[i]].category,
            date: posts[drive_arr[i]].date,
        });
    }
    return post;
}

