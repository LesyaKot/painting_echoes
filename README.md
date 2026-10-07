<!-- about -->

@media (min-width: 1024px) {
:global(body.dark-theme) .wrap::before {
content: '';
display: block;
position: fixed;
right: 0px;
bottom: 60px;
width: 350px;
height: 300px;
/_ padding-left: 60px; _/
/_ padding-right: 140px;
padding-right: 100px; _/
background-image: url('../../assets/leaf.png');
background-repeat: no-repeat;
background-position: center center;
background-size: contain;
filter: invert(0.9) sepia(0.3) opacity(0.6);
z-index: 1;
pointer-events: none;
}

:global(body.light-theme) .wrap::before {
content: '';
display: block;
position: fixed;
right: 0px;
bottom: 50px;
width: 350px;
height: 300px;
background-image: url('../../assets/leaf.png');
background-repeat: no-repeat;
background-position: center center;
background-size: contain;
filter: opacity(0.3);
z-index: 1;
pointer-events: none;
}
}
