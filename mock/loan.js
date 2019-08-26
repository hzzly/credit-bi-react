module.exports = function loan() {
  return {
    overview: {
      custCount: 14695, // 客户数量
      loanCount: 19016, // 贷款笔数
      loanAmt: 63900899.83, // 贷款金额
      overdueAmt: 2649125.65, // 逾期金额
      custCountComp: 10.6, // 客户比上月新增百分比
      loanCountComp: 9.39, // 贷款笔数你上月新增百分比
      loanAmtComp: 10.03, // 贷款金额比上月新增百分比
      overdueAmtComp: 0.0, // 逾期金额比上月降低百分比
    },
    loanStatistical: {
      balance: [
        { date: '1', value: 7 },
        { date: '2', value: 6.9 },
        { date: '3', value: 9.5 },
        { date: '4', value: 14.5 },
        { date: '5', value: 18.4 },
        { date: '6', value: 21.5 },
        { date: '7', value: 25.2 },
        { date: '8', value: 26.5 },
        { date: '9', value: 29.3 },
        { date: '10', value: '-' },
        { date: '11', value: '-' },
        { date: '12', value: '-' },
      ],
      prebalance: [
        { date: '1', value: '-' },
        { date: '2', value: '-' },
        { date: '3', value: '-' },
        { date: '4', value: '-' },
        { date: '5', value: '-' },
        { date: '6', value: '-' },
        { date: '7', value: '-' },
        { date: '8', value: '-' },
        { date: '9', value: '-' },
        { date: '10', value: 34.6 },
        { date: '11', value: 37.8 },
        { date: '12', value: 36.6 },
      ],
      new: [
        { date: '1', value: 3.9 },
        { date: '2', value: 4.2 },
        { date: '3', value: 5.7 },
        { date: '4', value: 8.5 },
        { date: '5', value: 11.9 },
        { date: '6', value: 15.2 },
        { date: '7', value: 17 },
        { date: '8', value: 16.6 },
        { date: '9', value: 19.2 },
        { date: '10', value: '-' },
        { date: '11', value: '-' },
        { date: '12', value: '-' },
      ],
      prenew: [
        { date: '1', value: '-' },
        { date: '2', value: '-' },
        { date: '3', value: '-' },
        { date: '4', value: '-' },
        { date: '5', value: '-' },
        { date: '6', value: '-' },
        { date: '7', value: '-' },
        { date: '8', value: '-' },
        { date: '9', value: '-' },
        { date: '10', value: 23.4 },
        { date: '11', value: 26.8 },
        { date: '12', value: 30 },
      ],
    },
    ageStatistical: {
      man: [
        { date: '50', value: 10 },
        { date: '60', value: 16 },
        { date: '70', value: 21 },
        { date: '80', value: 19 },
        { date: '90', value: 28 },
        { date: '00', value: 15 },
      ],
      women: [
        { date: '50', value: 8 },
        { date: '60', value: 14 },
        { date: '70', value: 19 },
        { date: '80', value: 16 },
        { date: '90', value: 31 },
        { date: '00', value: 25 },
      ],
    },
    ageAverage: {
      age: [
        { date: '50', value: 1075 },
        { date: '60', value: 1530 },
        { date: '70', value: 1620 },
        { date: '80', value: 1865 },
        { date: '90', value: 2053 },
        { date: '00', value: 3643 },
      ],
      average: [
        { date: '50', value: 6100 },
        { date: '60', value: 7430 },
        { date: '70', value: 5620 },
        { date: '80', value: 6865 },
        { date: '90', value: 4053 },
        { date: '00', value: 3643 },
      ],
    },
  };
};
