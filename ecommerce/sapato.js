function make_sapato_page_disappear()
{
  $("#div_sapato").hide();
}

function display_sapato_page()
{
  make_home_disappear();
  make_carrinho_page_disappear();
  make_camisa_page_disappear();
  make_short_page_disappear();
  $("#div_sapato").show();
}

//add_product_to_cart(page_number, product_number);
function sapato_buy_button1()
{
  add_product_to_cart(2, 0);
}

function sapato_buy_button2()
{
  add_product_to_cart(2, 1);
}

function sapato_buy_button3()
{
  add_product_to_cart(2, 2);
}

function sapato_buy_button4()
{
  add_product_to_cart(2, 3);
}
