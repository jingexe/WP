
document.querySelectorAll('.faqsection').forEach(function(container) {
    container.addEventListener('click', function() {
      document.querySelectorAll('.content').forEach(function(content) {
        if (content !== container.querySelector('.content')) {
          content.style.maxHeight = '0';
        }
      });
  
      var content = this.querySelector('.content');
      if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = '0';
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
  
  