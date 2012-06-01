$(document).ready(function(){
    // Embed YouTube videos
    // filter: the domain of the URL must end in youtube.com or youtu.be
    $('a[href*="youtube"], a[href*="youtu.be"]')
    	.filter(function() { return this.href.match(/^(?:[a-z]+:\/\/)?[^\/]*(?:youtube\.com|youtu\.be)\//i); })
    	.viewbox({ widthWindow: 900 });
});