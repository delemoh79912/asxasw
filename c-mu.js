$(document).ready(function() {
    const container = $('#container');
    const parent = $('#parent');
    const follower = $('#follower');
    const clipSize = 200;

    parent.mousemove(function(e) {
      const containerRect = container[0].getBoundingClientRect();
      const parentRect = parent[0].getBoundingClientRect();
      const mouseX = e.clientX - parentRect.left;
      const mouseY = e.clientY - parentRect.top;
      

      const clipX = (mouseX / parentRect.width) * 100;
      const clipY = (mouseY / parentRect.height) * 100;

      container.css('clip-path', `circle(100px at ${clipX}% ${clipY}%)`);
      
      follower.css('left', mouseX - clipSize / 2 + 'px');
      follower.css('top', mouseY - clipSize / 2 + 'px');
    });
  });
