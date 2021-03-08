function make_carrinho_page_disappear()
{
  $("#products_div").hide();
  $("#buy_button").css("display", "none");
}

function add_product_to_cart(page_number, product_number)
{
  produtos_info[page_number][0][product_number]++;
  numero_de_produtos_no_carrinho ++;
  valor_total += produtos_info[page_number][1][product_number];

  $("#carrinho_anchor_title").html("🛒 Cart (" + numero_de_produtos_no_carrinho + ")");

}


function display_carrinho_page() {
  make_home_disappear();
  make_camisa_page_disappear();;
  make_short_page_disappear();
  make_sapato_page_disappear();

  $("#products_div").css("display", "block");

  $("#product_div_title").html("Cart 🛒");

  $("#product_div_first_product_title").html("Price and products: ");

  $("#product_div_first_product_price").html("$ " + valor_total);

  var produtos_info_length = produtos_info.length,
    k = 0,
    text_wpp = ["https://api.whatsapp.com/send?phone=5571996344481&text=" + "Shopping%20Cart%3A%20%0D%0D"];

  for (var j = 0; j < produtos_info_length; j++) {
    var produtos = produtos_info[j][0].length;

    for (i = 0; i < produtos; i++) {
      if (produtos_info[j][0][i] > 0) {
        $("#product_div_first_product_description" + k).html(produtos_info[j][0][i] + " " + produtos_info[j][3][i] + " : " + (produtos_info[j][0][i] * produtos_info[j][1][i]) + " dollars.");

        word_length = $("#product_div_first_product_description" + k).html().length;

        console.log($("#product_div_first_product_description" + k).html());

        text_wpp += (produtos_info[j][0][i] + " " + produtos_info[j][6][i] + "%20%3A%20" + (produtos_info[j][0][i] * produtos_info[j][1][i]) + " dollars");

        text_wpp += "%0D";
        k++;
      }

    }

  }

  $("#buy_button").css("display", "block");
  $("#buy_button").html("Proceed to checkout");
  $("#buy_button").css("width", "40%");
  $("#buy_button").css("position", "relative");
  $("#buy_button").css("left", "30%");

  //mensagem Whatsapp:
  //quebra de linha:  %0D
  //Espaço: %20
  // : = %3A
  // $ = %24

  text_wpp += ("%0DTotal%20%3A%20" + valor_total + "%20dollars.");

  $("#buy_button").attr("href", text_wpp);
}
