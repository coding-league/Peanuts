document.querySelector('body').insertAdjacentHTML('Afterbegin', `
<header>  
    <div class="pnut-social-links">
        <h3> Follow us on </h3>
      <ul class="social-links">
        <li> <a href="#"><i class="ion-social-facebook "></i></a></li>
        <li> <a href="#"><i class="ion-social-twitter "></i></a></li>
        <li> <a href="#"><i class="ion-social-instagram "></i></a></li>
        <li> <a href="#"><i class="ion-social-youtube "></i></a></li>
      </ul>
    </div>
    <div class="pnut-menu">
        <ul class="menu" id="pea-menu">
          <li class="menu-about"> <a id="about"> ABOUT</a></li>
          <li class="menu-take-care"> <a id="take care"> TAKE CARE</a></li>
          <li class="menu-watch"> <a id="watch" > WATCH</a></li>
          <li class="menu-peanuts"> <a id="peanuts"><img src="../home/images/pnut-home1.jpg" alt="#"></a></li>
          <li class="menu-activities"> <a id="activities" > ACTIVITIES</a></li>
          <li class="menu-shop"> <a id="shop"> SHOP</a></li>
          <li class="menu-more"> <a id="more" > MORE</a></li>
        </ul>
    </div>)
`);