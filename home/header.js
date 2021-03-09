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

    <div class="topnav" id="myTopnav">
  <a href="#home" class="active">ABOUT</a>
  <a href="#news">TAKECARE</a>
  <a href="#news">WATCH</a>
  <a href="#contact">ACTIVITIES</a>
  <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">PEANUTS LESSON PLANS</a>
      <a href="#">PEANUTS COLORING SHEETS</a>
      <a href="#">MOBILE APP</a>
    </div>
  </div> 
  <a href="#about">SHOP</a>
  <a href="#about">MORE</a>
  <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
</div>
`);