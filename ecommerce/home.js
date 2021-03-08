function make_home_disappear()
{
$("#home-div").hide();
}

function home_page()
{
  make_carrinho_page_disappear();
  make_camisa_page_disappear();;
  make_short_page_disappear();
  make_sapato_page_disappear();
  $("#home-div").show();
}
