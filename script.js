
 const toggleButton = document.getElementById('toggleButton');
const textContainer = document.getElementById('textContainer');

toggleButton.addEventListener('click', function() {
  textContainer.classList.toggle('showText');
});;
         function createBlowEffect(e) {
        const blow = document.createElement("div");
        blow.className = "blow";
        blow.style.left = e.pageX + "px";
        blow.style.top = e.pageY + "px";
        document.body.appendChild(blow);
        // Remove the blow effect after 0.5 seconds
        setTimeout(() => {
          document.body.removeChild(blow);
        }, 500);
      }
       document.addEventListener("click", createBlowEffect);
      function copyLink() {
        var linkInput = document.getElementById("linkInput");
        linkInput.select();
        document.execCommand("copy");
        alert("Link copied to clipboard!");
      }

      function shareViaEmail() {
        var link = document.getElementById("linkInput").value;
        var subject = "Check out this link!";
        var body =
          "I found this link and thought you might be interested: " + link;
        var mailtoLink =
          "mailto:?subject=" +
          encodeURIComponent(subject) +
          "&body=" +
          encodeURIComponent(body);
        window.open(mailtoLink);
      }
 function redirectToGetStarted() {
   window.location.href = "https://checkout.thejobsco.io/";
 }
      function shareViaWhatsApp() {
        var link = document.getElementById("linkInput").value;
        var whatsappLink =
          "https://api.whatsapp.com/send?text=" + encodeURIComponent(link);
        window.open(whatsappLink);
      }

     function shareViaSMS() {
       var link = document.getElementById("linkInput").value;
       var smsLink = "sms:?body=" + encodeURIComponent(link);
       window.open(smsLink);
     }

      function shareViaFacebook() {
        var link = document.getElementById("linkInput").value;
        var facebookLink =
          "https://www.facebook.com/sharer.php?u=" + encodeURIComponent(link);
        window.open(facebookLink);
      }

      function shareViaInstagram() {
        var link = document.getElementById("linkInput").value;
        var instagramLink =
          "https://www.instagram.com/?url=" + encodeURIComponent(link);
        window.open(instagramLink);
      }
      function shareViaGmail() {
        var link = document.getElementById("linkInput").value;
        var gmailLink =
          "https://mail.google.com/mail/?view=cm&su=Check%20out%20this%20link!&body=I%20found%20this%20link%20and%20thought%20you%20might%20be%20interested:%20" +
          encodeURIComponent(link);
        window.open(gmailLink);
      }

      function shareViaTwitter() {
        var link = document.getElementById("linkInput").value;
        var twitterLink =
          "https://twitter.com/intent/tweet?url=" + encodeURIComponent(link);
        window.open(twitterLink);
      }

      function shareViaLinkedIn() {
        var link = document.getElementById("linkInput").value;
        var linkedinLink =
          "https://www.linkedin.com/sharing/share-offsite/?url=" +
          encodeURIComponent(link);
        window.open(linkedinLink);
      }