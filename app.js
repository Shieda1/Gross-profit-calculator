// https://calculator.swiftutors.com/gross-profit-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const grossProfitRadio = document.getElementById('grossProfitRadio');
const totalRevenueRadio = document.getElementById('totalRevenueRadio');
const totalCostofGoodsRadio = document.getElementById('totalCostofGoodsRadio');

let grossProfit;
let totalRevenue = v1;
let totalCostofGoods = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

grossProfitRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Revenue';
  variable2.textContent = 'Total Cost of Goods';
  totalRevenue = v1;
  totalCostofGoods = v2;
});

totalRevenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Profit';
  variable2.textContent = 'Total Cost of Goods';
  grossProfit = v1;
  totalCostofGoods = v2;
});

totalCostofGoodsRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Profit';
  variable2.textContent = 'Total Revenue';
  grossProfit = v1;
  totalRevenue = v2;
});


btn.addEventListener('click', function() {
  
  if(grossProfitRadio.checked)
    result.textContent = `Gross Profit = ${computeGrossProfit().toFixed(2)}`;

  else if(totalRevenueRadio.checked)
    result.textContent = `Total Revenue = ${computeTotalRevenue().toFixed(2)}`;

  else if(totalCostofGoodsRadio.checked)
    result.textContent = `Total Cost of Goods = ${computeTotalCostofGoods().toFixed(2)}`;
})

// calculation

function computeGrossProfit() {
  return Number(totalRevenue.value) - Number(totalCostofGoods.value);
}

function computeTotalRevenue() {
  return Number(grossProfit.value) + Number(totalCostofGoods.value);
}

function computeTotalCostofGoods() {
  return Number(totalRevenue.value) - Number(grossProfit.value);
}
