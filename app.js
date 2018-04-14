$.when($.getJSON('http://oils.rest/last-renaissance/assets.json')).done(function(items) {

  // Globals
  var charactersArray = items.characters;
  var wisdomArray = items.wisdom;
  var characterRandom = charactersArray[Math.floor(Math.random()*charactersArray.length)];
  var characterRandom2 = charactersArray[Math.floor(Math.random()*charactersArray.length)];
  var wisdomRandom = wisdomArray[Math.floor(Math.random()*wisdomArray.length)];

  var random_boolean = Math.random() >= 0.5;

  // Append to HTML
  if (random_boolean === true) {
  } else {

    $('.wisdom').toggle(200);
    $('.wisdom').append('<img width="60" src="' + characterRandom2.url + '">');

    var functionOne = function() {

      var r = $.Deferred();

      $('.wisdom p').typeIt({
        speed: 50,
        content : wisdomRandom.saying
      });
      
      return r;

    };

    var functionTwo = function() {
      $('.wisdom').delay(2000).fadeOut(1000);
    };

    functionOne().done( functionTwo() );

  }

  $('.screen').append('<span class="helper"></span><img src="' + characterRandom.url + '">');

});

/* Type out js */
!function(t,e,n){"use strict";function a(e,n){this.$el=t(e),this.$el.data(s,this),this.defaults={content:"",speed:100,removeAt:0,deleteNo:0,callback:""};var a=this.$el.data(s+"-opts");this.opts=t.extend(this.defaults,n,a),this.init()}var s="type-it";a.prototype.init=function(){var e=this,n=this.$el,s=[],a=this.opts.content,i=this.opts.speed,o=i*a.length;if(n.empty(),n.addClass("typing"),0==e.opts.removeAt||0==e.opts.removeAt){for(var p=0;p<a.length;p++)s.push(a[p]);t.each(s,function(t,e){setTimeout(function(){n.append("<span>"+e+"</span>")},t*i)})}else{for(var p=0;p<a.length;p++)s.push(a[p]);t.each(s,function(t,s){t<e.opts.removeAt&&n.append('<span data-timing="'+t*i+'" style="display: none;">'+s+"</span>")});for(var r=1,p=e.opts.removeAt-e.opts.deleteNo;p<e.opts.removeAt;p++){var l=n.find("span").last().attr("data-timing");n.find("span").eq(p).attr("data-delete",parseInt(l)+parseInt(i*r)),r+=1}t.each(s,function(t,s){t>=e.opts.removeAt&&n.append('<span data-timing="'+(t+e.opts.deleteNo)*i+'" style="display: none;">'+s+"</span>")});var d={},f=jQuery.makeArray(n.find("span"));t.each(f,function(t,e){d[e.dataset.timing]=1,d[e.dataset["delete"]]=-1});var r=0,c=parseInt(e.opts.removeAt),o=o+parseInt(e.opts.deleteNo*i),u=!1;t.each(d,function(t,e){setTimeout(function(){1==e&&0==u?(n.find("span").eq(r).css("display","inline"),r+=1):1==e&&1==u?(n.find("span").eq(c).css("display","inline"),c+=1):(n.find("span").eq(r).css("display","none"),r-=1),r==c-1&&(u=!0)},t)})}setTimeout(function(){e.opts.callback&&e.opts.callback()},o)},t.fn.typeIt=function(t){return this.each(function(){new a(this,t)})}}(jQuery,document,window);
