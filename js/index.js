var rootPath;

function init()
{
    rootPath="https://mysite.itvarsity.org/api/mini-blog/";

    document.getElementById("getLatest").addEventListener('click',getLatestPosts);
    document.getElementById("getAll").addEventListener('click',getAllPosts);
    document.getElementById("getPopular").addEventListener('click',getPopularPosts);

    getAllPosts();
}

function getAllPosts()
{
    category="getAll";
    setActiveLink(category);
    fetchPosts(category);
    //fetch all posts in category
    //set the "All" to active
}

function getPopularPosts()
{
    category="getPopular";
    setActiveLink(category);
    fetchPosts(category);
    //fetch all posts in category
    //set the "All" to active
}

function getLatestPosts()
{
    category="getLatest";
    
    setActiveLink(category);
    fetchPosts(category);
    //fetch all posts in category
    //set the "All" to active
}

function fetchPosts(category)
{
    fetch(rootPath+'get-posts/?category='+category)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
       displayPosts(data);
    })
}

function displayPosts(data){
    var output = "";
    
    for(a = 0; a < data.length; a++){
        output +=`
            <div class="card mb-4 box-shadow">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">${data[a][0]}</h4>
                </div>
                <div class="card-body">
                    <img src="${rootPath}/uploads/${data[a][3]}" class="card-img-top"/>
                    <p class="card-text">${data[a][1]}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-lg btn-link"><i class="far fa-heart"></i></button>
                            <button type="button" class="btn btn-lg btn-link"><i class="far fa-comment"></i></button>
                            <button type="button" class="btn btn-lg btn-link"><i class="fa fa-retweet"></i></button>
                        </div>
                        <small class="text-muted">${data[a][2]}</small>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById("posts").innerHTML = output;
}

function setActiveLink(id)
{
    document.getElementById("getAll").classList.remove("active");
    document.getElementById("getAll").classList.remove("active");
    document.getElementById("getAll").classList.remove("active");

    document.getElementById(id).classList.add("active");
}
