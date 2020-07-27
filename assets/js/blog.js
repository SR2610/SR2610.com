$.ajax({
    url: "https://api.tumblr.com/v2/blog/stephensdevblog.tumblr.com/posts?api_key=OUNgirD48XafoLwRaKbXZQ1GsRm5bsCMIfgzCZ6KmaKsWAFFOD",
    dataType: 'jsonp',
    success: function(posts){
      var postings = posts.response.posts;
      var text = '';
for (var i in postings) {
       var p = postings[i];
       var msec = Date.parse(p.date);
        var d = new Date(msec);
        var fulldate = (d.getDate() + '/'+ (d.getMonth() + 1)  +  '/' +  d.getFullYear());
          if(p.type == 'text'){
            var str = p.body;
            var newstr= str.replace("<img",'<img class="img-fluid"')
            text += '<h2>'+p.title +'</h2><br><h5>' +fulldate + '</h5> ' + ' <p class="lead mb-5"><span>'+  newstr +'</span></p><hr>';
  }
      }
      $('#blog').append(text);
    }
});