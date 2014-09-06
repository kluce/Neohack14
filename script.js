$(document).ready(function(){
var product01 = {
	itemID: 1187661,
	name: "JS Boutique One-Shoulder Colorblock Gown",
	lowprice: "176.99"
};
var product02 = {
	itemID: 1138386,
	name: "Lauren Ralph Lauren Long-sleeve Colorblocked Gown",
	lowprice: "170.00"
};
var product03 = {
	itemID: 1666301,
	name: "Xscape Strapless Embellished Gown",
	lowprice: "209.00"
};
$.ajax({
  url: "http://origin-api.macys.com/v3/catalog/product/1187661",
  headers:{
	"Accept": "application/json",
	"x-macys-webservice-client-id": "neohack14"
	},
  type: "GET",
  datatype: "json",
  success: function (product){
	alert("Success:");
	console.log(product);
	product01.image = product.product[0].image[0].imageurl
	product01.name = product.product[0].summary.name
	product01.lowPrice = product.product[0].price.sale.value
	product01.sizeList01 = product.product[0].SizeMap[0].size_value
	product01.sizeList02 = product.product[0].SizeMap[1].size_value
	product01.sizeList03 = product.product[0].SizeMap[2].size_value
	product01.sizeList04 = product.product[0].SizeMap[3].size_value
	$('#product01').append(
		"<p>"+product01.name+"<p>"
		).append(
		"<p>"+product01.lowPrice+"</p>"
		).append(
		"<ul>SIZES:<li>"+product01.sizeList01+
		"</li><li>"+product01.sizeList02+
		"</li><li>"+product01.sizeList03+
		"</li><li>"+product01.sizeList04+"</li></ul>"
		)
		;
	}

});









});