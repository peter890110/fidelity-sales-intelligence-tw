(function () {
  "use strict";

  var auditDate = "2026/09/08";
  var fidelitySource = "https://www.fidelity.com.tw/fund-and-service/fundui/funds/?grouping=%24fundRangeCode&intcmp=menu_ws_fund-and-service_sep_2022";
  var funds = [
    {id:"japan",name:"富達基金－日本價值基金",en:"Fidelity Japan Value Fund",share:"A2股日圓",asset:"股票型",theme:"日本價值",risk:"RR4",nav:"11,531.2000 日圓",navDate:"2026/09/03",y1:40.58,y3:91.92,perfDate:"2026/09/03",thesis:"公司治理改革、資本效率提升與價值重估構成長期選股脈絡。",role:"降低純科技成長曝險，補進日本企業改革紅利",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZA66",metrics:{asOf:"2026/09/03",y1:40.58,risk:18.48,distribution:0.02,distributionDate:"2026/07/31",expense:1.50,sharpe:0.55,distributionNote:"最新年化配息率（年配）",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZA66",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=FTZA66",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=FTZA66"}},
    {id:"bond",name:"富達基金－全球優質債券基金",en:"Fidelity Global Income Fund",share:"A股累計美元",asset:"債券型",theme:"全球複合債",risk:"RR3",nav:"14.9100 美元",navDate:"2026/09/04",y1:3.25,y3:22.21,perfDate:"2026/09/04",thesis:"以全球配置、信用研究與存續期間管理，在收益與防禦之間取得平衡。",role:"為高波動股票部位增加收益與緩衝來源",source:"https://wmfund.entrust.com.tw/w/wb/wb03.djhtm?a=FTZW6-01078UA",metrics:{asOf:"2026/09/04",y1:3.25,risk:2.80,distribution:0,distributionDate:"2026/09/04",expense:0.90,sharpe:0.21,distributionNote:"A 累積型；無配息",perfSource:"https://wmfund.entrust.com.tw/w/wb/wb03.djhtm?a=FTZW6-01078UA",basicSource:"https://newfund.tw.dbs.com/wpad/wb/wb01_FTZW6.djhtm",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=FTZW6"}},
    {id:"momentum",name:"富達基金－全球動能多元基金",en:"Fidelity Global Multi Asset Dynamic Fund",share:"A股累計美元",asset:"多重資產",theme:"動態配置",risk:"RR3",nav:"23.1100 美元",navDate:"2026/09/07",y1:24.92,y3:60.26,perfDate:"2026/09/07",thesis:"主動調整股票、債券及其他資產，因應景氣與市場動能轉換。",role:"用單一部位取得跨資產調整能力",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTH13",metrics:{asOf:"2026/09/07",y1:24.92,risk:13.38,distribution:0,distributionDate:"2026/09/07",expense:1.25,sharpe:0.48,distributionNote:"A 累積型；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTH13",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=FTH13",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=FTH13"}},
    {id:"income",name:"富達基金－全球多重資產收益基金",en:"Fidelity Global Multi Asset Income Fund",share:"A股累計美元",asset:"多重資產",theme:"收益導向",risk:"RR3",nav:"15.9800 美元",navDate:"2026/09/07",y1:11.44,y3:30.02,perfDate:"2026/09/07",thesis:"跨資產尋找多元收益來源，並兼顧資本增值與下檔管理。",role:"作為收益型組合的跨資產核心",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZU6",metrics:{asOf:"2026/09/07",y1:11.44,risk:7.08,distribution:0,distributionDate:"2026/09/07",expense:1.25,sharpe:0.40,distributionNote:"A 累積型；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZU6",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=FTZU6",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=FTZU6"}},
    {id:"sustainable",name:"富達基金－永續發展全球存股優勢基金",en:"Fidelity Global Dividend Plus Fund",share:"A股累計美元",asset:"股票型",theme:"全球股息／永續",risk:"RR4",nav:"15.4800 美元",navDate:"2026/09/07",y1:14.67,y3:59.79,perfDate:"2026/09/07",thesis:"聚焦具品質、股息韌性與永續特徵的全球企業。",role:"補足科技集中之外的品質股息來源",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZX7",metrics:{asOf:"2026/09/07",y1:14.67,risk:10.90,distribution:0,distributionDate:"2026/09/07",expense:1.50,sharpe:0.35,distributionNote:"A 累積型；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZX7",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=FTZX7",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=FTZX7"}},
    {id:"tech",name:"富達基金－全球科技基金",en:"Fidelity Global Technology Fund",share:"A股歐元",asset:"股票型",theme:"全球科技",risk:"RR4",nav:"94.6400 歐元",navDate:"2026/09/07",y1:27.32,y3:77.36,perfDate:"2026/09/07",thesis:"透過全球科技選股參與 AI、軟體、半導體與數位轉型。",role:"取得全球科技創新與產業擴散機會",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZ62",metrics:{asOf:"2026/09/07",y1:27.32,risk:20.53,distribution:0,distributionDate:"2026/09/07",expense:1.50,sharpe:0.35,distributionNote:"A 歐元級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZ62",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=FTZ62",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=FTZ62"}},
    {id:"asia",name:"富達基金－亞洲成長趨勢基金",en:"Fidelity Asian Special Situations Fund",share:"A股累計美元",asset:"股票型",theme:"亞洲成長",risk:"RR5",nav:"53.3500 美元",navDate:"2026/09/07",y1:62.50,y3:111.37,perfDate:"2026/09/07",thesis:"從亞洲供應鏈、消費升級與數位化中尋找結構性成長。",role:"擴大美股之外的亞洲成長來源",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZF8",metrics:{asOf:"2026/09/07",y1:62.50,risk:31.34,distribution:0,distributionDate:"2026/09/07",expense:1.50,sharpe:0.48,distributionNote:"A 累積型；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZF8",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=FTZF8",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=FTZF8"}},
    {id:"taiwan",name:"富達台灣成長基金",en:"Fidelity Taiwan Growth Fund",share:"A類型累積型（新臺幣）",asset:"股票型",theme:"台股成長",risk:"RR4",nav:"234.6400 新臺幣",navDate:"2026/09/04",y1:148.14,y3:284.72,perfDate:"2026/09/04",thesis:"主動選擇台灣具成長性與競爭力的企業，掌握產業升級。",role:"聚焦台灣成長企業與 AI 供應鏈機會",source:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACFD02",metrics:{asOf:"2026/09/04",y1:148.14,risk:50.67,distribution:0,distributionDate:"2026/09/04",expense:1.60,sharpe:0.59,distributionNote:"A 累積型；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACFD02",basicSource:"https://www.moneydj.com/funddj/yp/yp011000.djhtm?a=ACFD02",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=ACFD02"}},
    {id:"em",name:"富達基金－新興市場基金",en:"Fidelity Emerging Markets Fund",share:"A股美元",asset:"股票型",theme:"新興市場",risk:"RR5",nav:"52.3400 美元",navDate:"2026/09/07",y1:49.63,y3:100.25,perfDate:"2026/09/07",thesis:"以在地研究辨識國家、產業與企業差異，而非將新興市場視為單一交易。",role:"增加成熟市場之外的結構性成長來源",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZ02",metrics:{asOf:"2026/09/07",y1:49.63,risk:26.60,distribution:0,distributionDate:"2026/09/07",expense:1.50,sharpe:0.46,distributionNote:"A 美元級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZ02",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=FTZ02",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=FTZ02"}}
  ];

  var peers = {
    japan:[
      {name:"富蘭克林坦伯頓日本基金日圓 A（ACC）",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FLZA3",note:"同為日本股票、日圓計價級別；策略偏大型均衡，適合與日本價值做原幣比較。",metrics:{asOf:"2026/09/03",y1:26.05,risk:11.30,distribution:0,distributionDate:"2026/09/03",expense:1.00,sharpe:0.58,distributionNote:"累積級別；MoneyDJ 查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/ya/yp081002.djhtm?D=1&a=f2",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=FLZA3",distributionSource:"https://m.moneydj.com/B5.aspx?a=FLZA3"}},
      {name:"野村日本策略價值基金 T 美元避險類股",type:"鄰近策略",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=NFI10",note:"同為日本價值股票，但此公開級別為美元避險；可比較風險效率，原幣報酬仍須留意避險差異。",metrics:{asOf:"2026/09/03",y1:27.54,risk:13.04,distribution:0,distributionDate:"2026/09/03",expense:2.00,sharpe:0.55,distributionNote:"MoneyDJ 未列配息頻率／無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=NFI10",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=NFI10",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=NFI10"}},
      {name:"瀚亞投資－日本動力股票基金 Aj（日圓）",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=IOFA5",note:"同為日本股票、日圓計價級別；風格較偏動能與集中選股，可直接比較原幣績效與波動。",metrics:{asOf:"2026/09/03",y1:51.15,risk:14.07,distribution:0,distributionDate:"2026/09/03",expense:1.50,sharpe:0.85,distributionNote:"MoneyDJ 未列配息頻率／無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=IOFA5",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=IOFA5",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=IOFA5"}}
    ],
    bond:[
      {name:"路博邁全球策略收益債券基金 T 累積型（台幣）",type:"鄰近策略",source:"https://www.moneydj.com/funddj/ya/yp081005.djhtm?a=ET005003",note:"策略收益債；台幣累積級別，與富達美元級別存在幣別差異。",metrics:{asOf:"2026/09/04",y1:1.13,risk:2.91,distribution:0,distributionDate:"2026/09/04",expense:1.50,sharpe:-0.01,distributionNote:"T 累積型；無配息",perfSource:"https://www.moneydj.com/funddj/ya/yp081005.djhtm?a=ET005003",basicSource:"https://www.moneydj.com/funddj/yp/yp011000.djhtm?a=ACNB108",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=ACNB108"}},
      {name:"聯博－美國收益基金 A2 美元",type:"鄰近策略",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=ALZ10",note:"以美元債券為主且含非投資等級債，投資範圍與富達不完全相同。",metrics:{asOf:"2026/09/04",y1:0.48,risk:1.79,distribution:0,distributionDate:"2026/09/04",expense:1.10,sharpe:-0.12,distributionNote:"A2 累積級別；無配息",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=ALZ10",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=ALZ10",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=ALZ10"}},
      {name:"PIMCO 多元收益債券基金－E級類別（累積股份）",type:"鄰近策略",source:"https://www.moneydj.com/funddj/ya/yp081002.djhtm?a=g9&d=",note:"美元累積級別；多元信用收益取向，非投資等級曝險可能高於全球優質債券。",metrics:{asOf:"2026/09/04",y1:4.17,risk:2.62,distribution:0,distributionDate:"2026/09/04",expense:1.59,sharpe:0.32,distributionNote:"E 級累積股份；無配息",perfSource:"https://www.moneydj.com/funddj/ya/yp081002.djhtm?a=g9&d=",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=PIK11",distributionSource:"https://m.moneydj.com/b5.aspx?a=PIK11"}}
    ],
    momentum:[
      {name:"群益潛力收益多重資產基金 NA 累積型（美元）",type:"鄰近策略",source:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACCA210",note:"多重資產但偏收益取向，與動能配置目標不同。",metrics:{asOf:"2026/09/04",y1:5.67,risk:14.54,distribution:0,distributionDate:"2026/09/04",expense:1.70,sharpe:0.10,distributionNote:"NA 累積型；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACCA210",basicSource:"https://www.moneydj.com/funddj/yp/yp011000.djhtm?a=ACCA210",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=ACCA210"}},
      {name:"PIMCO 收益增長基金 M 級類別（累積股份）",type:"鄰近策略",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=PIMB8",note:"收益增長取向，可比較資產配置但非完全同策略。",metrics:{asOf:"2026/09/04",y1:21.38,risk:7.15,distribution:0,distributionDate:"2026/09/04",expense:1.60,sharpe:0.75,distributionNote:"M 級累積股份；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=PIMB8",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=PIMB8",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=PIMB8"}},
      {name:"安聯收益成長基金 AT 累積類股（美元）",type:"鄰近策略",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=TLZ63",note:"美國平衡型且含非投資級債，區域範圍不同。",metrics:{asOf:"2026/09/04",y1:10.13,risk:8.56,distribution:0,distributionDate:"2026/09/04",expense:1.50,sharpe:0.30,distributionNote:"AT 累積類股；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=TLZ63",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=TLZ63",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=TLZ63"}},
      {name:"摩根投資基金－多重收益基金 A 股（美元對沖）（累計）",type:"鄰近策略",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=JFZA6",note:"收益導向且為美元對沖級別；應以總報酬比較，並留意避險口徑。",metrics:{asOf:"2026/09/04",y1:11.99,risk:5.05,distribution:0,distributionDate:"2026/09/04",expense:1.25,sharpe:0.59,distributionNote:"累計級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=JFZA6",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=JFZA6",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=JFZA6"}},
      {name:"聯博－全球多元收益基金 A 級別美元",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=ALBG2",note:"全球多重資產，可比較配置框架與風險目標。",metrics:{asOf:"2026/09/04",y1:9.65,risk:5.05,distribution:0,distributionDate:"2026/09/04",expense:1.50,sharpe:0.47,distributionNote:"MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=ALBG2",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=ALBG2",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=ALBG2"}},
      {name:"富達基金－全球多元收益基金 A 股累計美元",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZA92",note:"同品牌新策略；2026/01/14 成立，尚無一年績效、年化標準差與 Sharpe。",metrics:{asOf:"2026/09/07",y1:null,risk:null,distribution:0,distributionDate:"2026/09/07",expense:1.25,sharpe:null,distributionNote:"A 累積型；MoneyDJ 未列配息頻率／查無配息紀錄",availabilityNote:"成立未滿一年",shortTermLabel:"六個月",shortTermValue:8.27,perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FTZA92",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=FTZA92",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=FTZA92"}},
      {name:"施羅德環球基金系列－環球多元收益（美元）A－累積",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=PYZW6",note:"全球平衡型美元累積級別。",metrics:{asOf:"2026/09/07",y1:12.13,risk:4.50,distribution:0,distributionDate:"2026/09/07",expense:1.25,sharpe:0.67,distributionNote:"A 累積級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=PYZW6",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=PYZW6",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=PYZW6"}},
      {name:"貝萊德環球資產配置基金 A2 美元",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=SHZB2",note:"全球動態配置，可比較風險預算與資產調整。",metrics:{asOf:"2026/09/07",y1:12.97,risk:9.47,distribution:0,distributionDate:"2026/09/07",expense:1.50,sharpe:0.35,distributionNote:"A2 累積級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=SHZB2",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=SHZB2",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=SHZB2"}}
    ],
    income:[
      {name:"摩根投資基金－多重收益基金 A 股（美元對沖）（累計）",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=JFZA6",note:"全球多重資產收益策略；美元對沖級別需留意避險口徑。",metrics:{asOf:"2026/09/04",y1:11.99,risk:5.05,distribution:0,distributionDate:"2026/09/04",expense:1.25,sharpe:0.59,distributionNote:"累計級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=JFZA6",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=JFZA6",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=JFZA6"}},
      {name:"貝萊德多元收益成長基金 A2 美元",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=SHZA19",note:"同屬多重資產收益類別，A2 為累積級別。",metrics:{asOf:"2026/09/07",y1:11.14,risk:6.40,distribution:0,distributionDate:"2026/09/07",expense:1.50,sharpe:0.43,distributionNote:"A2 累積級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=SHZA19",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=SHZA19",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=SHZA19"}},
      {name:"安聯收益成長基金 AT 累積類股（美元）",type:"鄰近策略",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=TLZ63",note:"美國平衡型，與全球收益策略的範圍不同。",metrics:{asOf:"2026/09/04",y1:10.13,risk:8.56,distribution:0,distributionDate:"2026/09/04",expense:1.50,sharpe:0.30,distributionNote:"AT 累積類股；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=TLZ63",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=TLZ63",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=TLZ63"}}
    ],
    sustainable:[
      {name:"貝萊德智慧數據收益成長基金 B2 美元",type:"鄰近策略",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=SHZA57",note:"系統化收益與成長策略，並非純全球股息股票。",metrics:{asOf:"2026/09/07",y1:11.21,risk:5.29,distribution:0,distributionDate:"2026/09/07",expense:1.50,sharpe:0.52,distributionNote:"B2 累積級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=SHZA57",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=SHZA57",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=SHZA57"}}
    ],
    tech:[
      {name:"貝萊德世界科技基金 A2 美元",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=SHZ71",note:"全球科技股票直接競品；富達為歐元、貝萊德為美元，報酬比較須留意幣別。",metrics:{asOf:"2026/09/07",y1:37.57,risk:33.65,distribution:0,distributionDate:"2026/09/07",expense:1.50,sharpe:0.30,distributionNote:"A2 累積級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=SHZ71",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=SHZ71",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=SHZ71"}},
      {name:"摩根美國科技基金 A 股（美元）（累計）",type:"鄰近策略",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=JFZG4",note:"美國科技取向，地區範圍較集中。",metrics:{asOf:"2026/09/04",y1:17.30,risk:30.87,distribution:0,distributionDate:"2026/09/04",expense:1.50,sharpe:0.18,distributionNote:"A 累計級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=JFZG4",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=JFZG4",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=JFZG4"}},
      {name:"富蘭克林坦伯頓科技基金美元 A（ACC）",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FLZ80",note:"全球科技股票競品，美元累積級別。",metrics:{asOf:"2026/09/04",y1:30.41,risk:28.04,distribution:0,distributionDate:"2026/09/04",expense:1.00,sharpe:0.30,distributionNote:"A 累積級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=FLZ80",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=FLZ80",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=FLZ80"}}
    ],
    asia:[
      {name:"瀚亞投資－亞洲股票基金 A（美元）",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=IOF26",note:"亞洲股票美元級別，可比較國家配置與選股來源。",metrics:{asOf:"2026/09/07",y1:42.50,risk:19.76,distribution:0,distributionDate:"2026/09/07",expense:1.50,sharpe:0.53,distributionNote:"A 美元級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=IOF26",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=IOF26",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=IOF26"}},
      {name:"施羅德環球基金系列－新興亞洲（美元）A－累積",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=PYZ84",note:"新興亞洲範圍，成熟亞洲曝險可能不同。",metrics:{asOf:"2026/09/07",y1:41.77,risk:25.72,distribution:0,distributionDate:"2026/09/07",expense:1.50,sharpe:0.41,distributionNote:"A 累積級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=PYZ84",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=PYZ84",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=PYZ84"}}
    ],
    taiwan:[
      {name:"安聯台灣科技基金",type:"鄰近策略",source:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACDD04",note:"台灣科技股票，產業集中度較高。",metrics:{asOf:"2026/09/04",y1:189.70,risk:49.14,distribution:0,distributionDate:"2026/09/04",expense:1.60,sharpe:0.71,distributionNote:"MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACDD04",basicSource:"https://www.moneydj.com/funddj/yp/yp011000.djhtm?a=ACDD04",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=ACDD04"}},
      {name:"安聯台灣大壩基金－A累積型（台幣）",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACDD01",note:"台灣一般股票型，可比較主動選股與產業配置。",metrics:{asOf:"2026/09/01",y1:176.40,risk:46.62,distribution:0,distributionDate:"2026/09/01",expense:1.60,sharpe:0.71,distributionNote:"A 累積型；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACDD01",basicSource:"https://www.moneydj.com/funddj/yp/yp011000.djhtm?a=ACDD01",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=ACDD01"}},
      {name:"路博邁5G股票基金－T累積型（台幣）",type:"鄰近策略",source:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACNB47",note:"5G 主題，科技集中度較高。",metrics:{asOf:"2026/09/03",y1:66.31,risk:47.21,distribution:0,distributionDate:"2026/09/03",expense:2.00,sharpe:0.37,distributionNote:"T 累積型；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACNB47",basicSource:"https://www.moneydj.com/funddj/yp/yp011000.djhtm?a=ACNB47",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=ACNB47"}},
      {name:"野村台灣運籌基金",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACKH03",note:"台灣一般股票型，可比較產業輪動。",metrics:{asOf:"2026/09/07",y1:182.67,risk:37.73,distribution:0,distributionDate:"2026/09/07",expense:1.50,sharpe:0.86,distributionNote:"MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACKH03",basicSource:"https://www.moneydj.com/funddj/yp/yp011000.djhtm?a=ACKH03",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=ACKH03"}},
      {name:"元大多多基金－A不配息（台幣）",type:"直接同類",source:"https://landbank.moneydj.com/w/wr/wr03.djhtm?a=ACYT03-B403",note:"台灣一般股票型，同幣別不配息級別。",metrics:{asOf:"2026/09/07",y1:204.71,risk:37.24,distribution:0,distributionDate:"2026/09/07",expense:1.75,sharpe:0.94,distributionNote:"A 不配息級別",perfSource:"https://landbank.moneydj.com/w/wr/wr03.djhtm?a=ACYT03-B403",basicSource:"https://www.moneydj.com/funddj/yp/yp011000.djhtm?a=ACYT03",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=ACYT03"}},
      {name:"統一奔騰基金",type:"鄰近策略",source:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACPS10",note:"台灣科技類股票，應特別比較集中度與波動。",metrics:{asOf:"2026/09/04",y1:140.34,risk:50.34,distribution:0,distributionDate:"2026/09/04",expense:1.60,sharpe:0.57,distributionNote:"MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012000.djhtm?a=ACPS10",basicSource:"https://www.moneydj.com/funddj/yp/yp011000.djhtm?a=ACPS10",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=ACPS10"}}
    ],
    em:[
      {name:"摩根基金－環球新興市場機會基金 A 股（美元）（累計）",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=JFZD1",note:"全球新興市場股票美元累積級別。",metrics:{asOf:"2026/09/07",y1:47.85,risk:23.10,distribution:0,distributionDate:"2026/09/07",expense:1.50,sharpe:0.51,distributionNote:"A 累積級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=JFZD1",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=JFZD1",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=JFZD1"}},
      {name:"施羅德環球基金系列－新興市場（美元）A－累積",type:"直接同類",source:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=PYZ69",note:"全球新興市場股票美元累積級別。",metrics:{asOf:"2026/09/07",y1:47.08,risk:23.07,distribution:0,distributionDate:"2026/09/07",expense:1.50,sharpe:0.50,distributionNote:"A 累積級別；MoneyDJ 未列配息頻率／查無配息紀錄",perfSource:"https://www.moneydj.com/funddj/yp/yp012001.djhtm?a=PYZ69",basicSource:"https://www.moneydj.com/funddj/yp/yp011001.djhtm?a=PYZ69",distributionSource:"https://www.moneydj.com/funddj/yp/wb05.djhtm?a=PYZ69"}}
    ]
  };

  var market = {
    title:"AI 與企業獲利延續支撐，但通膨、政策與區域分化仍高",
    body:"富達 2026 年 8 月資產配置觀點維持選擇性加碼股票，並強調主動管理與精選標的；美國聯準會官員 9 月 3 日表示，政策仍高度依賴即將公布的通膨資料。銷售對話應從「猜高點」轉向「配置角色與分批節奏」。",
    source:"https://www.fidelity.com.tw/insights-learning/market-insights/global-asset-allocation-2608/",
    fed:"https://www.federalreserve.gov/newsevents/speech/waller20260903a.htm"
  };

  var state = {
    page:"home",
    fundId:"japan",
    peerName:"",
    client:"55 歲企業主，台股部位高，希望增加海外資產，但擔心市場估值偏高。",
    mode:"反直覺破題",
    generated:false,
    query:""
  };

  function comparisonUrl(fundId, peerName) {
    var url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("page", "compare");
    url.searchParams.set("fund", fundId);
    if (peerName) url.searchParams.set("peer", peerName);
    url.hash = "comparison";
    return url.toString();
  }

  function openComparison(fundId, peerName) {
    window.open(comparisonUrl(fundId, peerName), "_blank", "noopener,noreferrer");
  }

  function restoreStateFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var requestedFund = params.get("fund");
    var requestedPeer = params.get("peer");
    var validFund = funds.some(function (fund) { return fund.id === requestedFund; });
    if (params.get("page") === "compare") state.page = "compare";
    if (validFund) state.fundId = requestedFund;
    if (requestedPeer && (peers[state.fundId] || []).some(function (peer) { return peer.name === requestedPeer; })) {
      state.peerName = requestedPeer;
    }
  }

  var frames = {
    "反直覺破題":"市場很高時，最大的風險未必是開始投資，而是讓原有風險繼續高度集中。",
    "故事比喻":"投資組合像一支球隊：明星前鋒再強，也不能九個位置都放前鋒。",
    "董事會精準":"今天不預測高點，只做一個決策：要不要降低單一風險來源對總資產的支配力。",
    "蘇格拉底提問":"如果未來一年市場不照任何人的劇本走，您希望組合靠什麼繼續前進？"
  };

  function currentFund() {
    return funds.filter(function (f) { return f.id === state.fundId; })[0];
  }

  function currentPeers() {
    return peers[state.fundId] || [];
  }

  function currentPeer() {
    var list = currentPeers();
    var match = list.filter(function (p) { return p.name === state.peerName; })[0];
    return match || list[0];
  }

  function cleanName(name) {
    return name.replace("富達基金－", "");
  }

  function pct(value) {
    return "+" + Number(value).toFixed(2) + "%";
  }

  var metricDefinitions = [
    {key:"y1",label:"一年績效",direction:"high",hint:"越外＝績效較高",format:function (v) { return Number(v).toFixed(2) + "%"; }},
    {key:"risk",label:"風險",direction:"high",hint:"越外＝波動較高｜低較佳",format:function (v) { return Number(v).toFixed(2) + "%"; }},
    {key:"distribution",label:"配息",direction:"high",hint:"越外＝配息率較高｜高不等於佳",format:function (v) { return Number(v).toFixed(2) + "%"; }},
    {key:"expense",label:"費用率",direction:"high",hint:"越外＝費用較高｜低較佳",format:function (v) { return Number(v).toFixed(2) + "%"; }},
    {key:"sharpe",label:"夏普值",direction:"high",hint:"越外＝風險效率較高",format:function (v) { return Number(v).toFixed(2); }}
  ];

  function hasCompleteMetrics(item) {
    return item && item.metrics && metricDefinitions.every(function (definition) {
      return typeof item.metrics[definition.key] === "number" && isFinite(item.metrics[definition.key]);
    });
  }

  function hasMetric(item, key) {
    return item && item.metrics && typeof item.metrics[key] === "number" && isFinite(item.metrics[key]);
  }

  function peerMetricCell(item, definition, note) {
    if (hasMetric(item, definition.key)) {
      return '<b>' + definition.format(item.metrics[definition.key]) + '</b><small>' + note + '</small>';
    }
    if (definition.key === "y1" && item.metrics && typeof item.metrics.shortTermValue === "number") {
      return '<b class="dataUnavailable">成立未滿一年</b><small>' + item.metrics.shortTermLabel + ' ' + pct(item.metrics.shortTermValue) + ' · ' + item.metrics.asOf + '</small>';
    }
    return '<b class="dataUnavailable">尚無一年期資料</b><small>' + ((item.metrics && item.metrics.availabilityNote) || "資料尚未形成") + '</small>';
  }

  function metricUniverse(fund) {
    return [fund].concat(peers[fund.id] || []).filter(hasCompleteMetrics);
  }

  function metricScores(fund, item) {
    var universe = metricUniverse(fund);
    return metricDefinitions.map(function (definition) {
      if (definition.key === "distribution") {
        return Math.max(0, Math.min(1, item.metrics.distribution / 10));
      }
      var values = universe.map(function (entry) { return entry.metrics[definition.key]; });
      var mean = values.reduce(function (sum, value) { return sum + value; }, 0) / values.length;
      var variance = values.reduce(function (sum, value) { return sum + Math.pow(value - mean, 2); }, 0) / values.length;
      var deviation = Math.sqrt(variance);
      if (!deviation) return 0.5;
      var z = (item.metrics[definition.key] - mean) / deviation;
      // Z-score is compressed into a 30–70 display band so a small peer pool does
      // not turn the lowest and highest observations into visual zeroes or full marks.
      return 0.5 + 0.2 * Math.tanh(z / 1.35);
    });
  }

  function radarPoints(values, radius) {
    var cx = 180;
    var cy = 166;
    return values.map(function (value, index) {
      var angle = -Math.PI / 2 + index * Math.PI * 2 / values.length;
      var r = radius * value;
      return (cx + Math.cos(angle) * r).toFixed(1) + "," + (cy + Math.sin(angle) * r).toFixed(1);
    }).join(" ");
  }

  function radarChart(fund, peer) {
    if (!hasCompleteMetrics(fund) || !hasCompleteMetrics(peer)) {
      return '<div class="radarUnavailable"><strong>此組五指標尚未完成同源核對</strong><p>至少一檔基金缺少一年績效、年化標準差、最新年化配息率、最高經理費或 Sharpe。為避免把 N/A 當成 0 分，系統不繪製五邊形。</p><span>只顯示已公開且可追溯的數字，不補值、不估算。</span></div>';
    }
    var fidelityValues = metricScores(fund, fund);
    var peerValues = metricScores(fund, peer);
    var axisLines = metricDefinitions.map(function (_, index) {
      var angle = -Math.PI / 2 + index * Math.PI * 2 / metricDefinitions.length;
      return '<line x1="180" y1="166" x2="' + (180 + Math.cos(angle) * 116).toFixed(1) + '" y2="' + (166 + Math.sin(angle) * 116).toFixed(1) + '"></line>';
    }).join("");
    var dots = function (values, className) {
      return values.map(function (value, index) {
        var angle = -Math.PI / 2 + index * Math.PI * 2 / values.length;
        var r = 116 * value;
        return '<circle class="' + className + '" cx="' + (180 + Math.cos(angle) * r).toFixed(1) + '" cy="' + (166 + Math.sin(angle) * r).toFixed(1) + '" r="4"></circle>';
      }).join("");
    };
    var labels = metricDefinitions.map(function (definition, index) {
      var fundRaw = fund.metrics[definition.key];
      var peerRaw = peer.metrics[definition.key];
      var fundRank = fundRaw === peerRaw ? '相同' : fundRaw > peerRaw ? '較高' : '較低';
      var peerRank = fundRaw === peerRaw ? '相同' : peerRaw > fundRaw ? '較高' : '較低';
      var scaleNote = definition.key === "distribution" ? '絕對刻度 0%–10%' : '同類平均＝50';
      return '<div class="radarAxis a' + (index + 1) + '"><b>' + definition.label + '</b><span class="fidelityStatus">' + definition.format(fundRaw) + '<u>' + fundRank + '</u></span><span class="peerStatus ok">' + definition.format(peerRaw) + '<u>' + peerRank + '</u></span><small>' + definition.hint + '</small><em>' + scaleNote + '</em></div>';
    }).join("");
    var rows = metricDefinitions.map(function (definition) {
      var fundNote = definition.key === "distribution" ? '<small>' + fund.metrics.distributionNote + '</small>' : '';
      var peerNote = definition.key === "distribution" ? '<small>' + peer.metrics.distributionNote + '</small>' : '';
      return '<div class="metricRow"><div><b>' + definition.label + '</b><small>' + definition.hint + '</small></div><strong class="fidelityStatus">' + definition.format(fund.metrics[definition.key]) + fundNote + '</strong><strong class="peerStatus ok">' + definition.format(peer.metrics[definition.key]) + peerNote + '</strong></div>';
    }).join("");
    return '<div class="radarLegend"><span><i class="fidelityKey"></i>' + cleanName(fund.name) + '</span><span><i class="peerKey"></i>' + peer.name + '</span></div>' +
      '<div class="radarWrap"><svg class="radarPlot" viewBox="0 0 360 332" role="img" aria-label="' + escapeHtml(cleanName(fund.name) + "與" + peer.name + "的一年績效、風險、配息、費用率與夏普值比較圖") + '">' +
      '<g class="radarGrid"><polygon points="' + radarPoints([1,1,1,1,1],116) + '"></polygon><polygon points="' + radarPoints([.67,.67,.67,.67,.67],116) + '"></polygon><polygon points="' + radarPoints([.34,.34,.34,.34,.34],116) + '"></polygon>' + axisLines + '</g>' +
      '<polygon class="fidelityShape" points="' + radarPoints(fidelityValues,116) + '"></polygon><polygon class="peerShape" points="' + radarPoints(peerValues,116) + '"></polygon>' + dots(fidelityValues,"fidelityDot") + dots(peerValues,"peerDot") + '</svg>' + labels + '</div>' +
      '<p class="radarReading"><b>讀圖：</b>配息軸採 0%–10% 絕對刻度，因此 0% 位於正中心，0.02% 只比中心多出極小距離；其餘四項採同類基金池 Z-score 標準化，50 代表同類平均，並收斂在 30–70。五個指標都是數值越高越外；風險與費用通常越低較佳，配息率較高也不等於總報酬較佳。這是比較指數，不是基金評分。</p>' +
      '<div class="metricMatrix"><div class="metricRow metricHead"><div>原始指標</div><strong>' + cleanName(fund.name) + '</strong><strong>' + peer.name + '</strong></div>' + rows + '<p>績效／風險／Sharpe 資料日：' + fund.metrics.asOf + '、' + peer.metrics.asOf + '。配息資料日依各級別最近紀錄；費用率採 MoneyDJ 揭露的最高經理費。</p></div>';
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char];
    });
  }

  function title(eyebrow, heading, text) {
    return '<div class="title"><div><small>' + eyebrow + '</small><h1>' + heading + '</h1><p>' + text + '</p></div><span><i></i> VERIFIED DATA<br><small>查核 ' + auditDate + '</small></span></div>';
  }

  function options(items, selected, key, label) {
    return items.map(function (item) {
      var value = item[key];
      return '<option value="' + escapeHtml(value) + '"' + (value === selected ? " selected" : "") + '>' + escapeHtml(label(item)) + '</option>';
    }).join("");
  }

  function renderHome() {
    var cards = funds.map(function (f, i) {
      return '<button data-fund="' + f.id + '" class="' + (i === 0 ? "featured" : "") + '" title="另開比較頁"><div><em>' + String(i + 1).padStart(2, "0") + '</em><span>' + f.risk + '</span></div><small>' + f.asset + ' / ' + f.theme + '</small><h3>' + cleanName(f.name) + '</h3><p>' + f.share + '</p><div class="return"><small>1Y · ' + f.perfDate + '</small><b>' + pct(f.y1) + '</b></div></button>';
    }).join("");
    return '<div class="page">' +
      '<section class="hero"><div class="heroCopy"><div class="kicker">FIDELITY / SALES EDGE</div><h1>把市場雜訊，<br><span>變成成交洞察。</span></h1><p>九檔核心基金、同類型競品與當期市場論證，在一次客戶對話需要的距離內。</p><div class="actions"><button data-go="compare">進入競品決策室</button><button class="outline" data-go="script">開啟話術實驗室</button></div></div>' +
      '<article class="signal"><div class="signalTop"><small>TODAY\'S CONVICTION</small><b>01 / 09</b></div><h2>日本價值的重估，<br>不只是匯率交易。</h2><p>從公司治理、股東回報與資本效率切入，讓客戶理解結構性改變，而不是追逐單日指數。</p><div class="stat"><span>近一年累計<small>2026/09/03</small></span><strong>+40.58%</strong></div><button data-fund="japan" title="另開比較頁">拆解競品 ↗</button></article></section>' +
      '<section class="marketBar"><div><small>MARKET SIGNAL / 09.04</small><h2>' + market.title + '</h2></div><p>' + market.body + '</p><a href="' + market.source + '" target="_blank" rel="noopener noreferrer">富達觀點 ↗</a></section>' +
      '<section class="sectionHead"><div><small>CORE PRIORITIES</small><h2>九檔主推基金</h2></div><button data-go="library">完整資料庫 →</button></section><div class="fundGrid">' + cards + '</div></div>';
  }

  function renderCompare() {
    var fund = currentFund();
    var list = currentPeers();
    var peer = currentPeer();
    var fundOptions = options(funds, fund.id, "id", function (f) { return f.name + "｜" + f.share; });
    var peerOptions = options(list, peer.name, "name", function (p) { return p.name; });
    var peerCards = list.map(function (p, i) {
      var m = p.metrics;
      var summary = hasCompleteMetrics(p) ? '<div class="peerMiniMetrics"><b>1Y ' + metricDefinitions[0].format(m.y1) + '</b><span>風險 ' + metricDefinitions[1].format(m.risk) + '</span><span>費用 ' + metricDefinitions[3].format(m.expense) + '</span><small>資料日 ' + m.asOf + '</small></div>' : (m ? '<div class="peerMiniMetrics"><b>1Y 成立未滿一年</b><span>' + m.shortTermLabel + ' ' + pct(m.shortTermValue) + '</span><span>費用 ' + metricDefinitions[3].format(m.expense) + '</span><small>資料日 ' + m.asOf + '</small></div>' : '');
      return '<button data-peer="' + escapeHtml(p.name) + '" class="' + (p.name === peer.name ? "active" : "") + '" title="另開比較頁"><em>' + String(i + 1).padStart(2, "0") + '</em><span>' + p.type + '</span><h3>' + p.name + '</h3><p>' + p.note + '</p>' + summary + '<small>查看比較 ↗</small></button>';
    }).join("");
    var peerRows = list.map(function (p, i) {
      return '<tr class="' + (p.name === peer.name ? "selected" : "") + '"><td>' + String(i + 1).padStart(2, "0") + '</td><td><b>' + p.name + '</b><small>' + p.note + '</small></td><td>' + p.type + '</td><td>' + peerMetricCell(p, metricDefinitions[0], '資料日 ' + (p.metrics ? p.metrics.asOf : '未提供')) + '</td><td>' + peerMetricCell(p, metricDefinitions[1], '年化標準差 · ' + (p.metrics ? p.metrics.asOf : '未提供')) + '</td><td>' + peerMetricCell(p, metricDefinitions[3], '最高管理年費') + '</td><td><button data-peer="' + escapeHtml(p.name) + '" title="另開比較頁">比較 ↗</button><a href="' + p.source + '" target="_blank" rel="noopener noreferrer">來源 ↗</a></td></tr>';
    }).join("");
    var opening = "很多客戶先問哪一檔報酬高，但真正專業的比較要先確認級別、幣別、資料日與投資範圍。" + fund.name + "的配置角色是：" + fund.role + "。";
    var peerMetricEvidence = hasCompleteMetrics(peer) ? '1Y ' + metricDefinitions[0].format(peer.metrics.y1) + ' / 年化標準差 ' + metricDefinitions[1].format(peer.metrics.risk) + ' / Sharpe ' + metricDefinitions[4].format(peer.metrics.sharpe) + '<small>' + peer.metrics.asOf + '</small>' : (peer.metrics ? '<span class="pending">' + peer.metrics.availabilityNote + '：一年績效、風險與 Sharpe 尚未形成；' + peer.metrics.shortTermLabel + ' ' + pct(peer.metrics.shortTermValue) + '</span><small>' + peer.metrics.asOf + '</small>' : '<span class="pending">五指標尚未完成同源核對</span>');
    return '<div class="page">' + title("COMPETITOR INTELLIGENCE", "競品決策室", "先確認可比性，再談績效；沒有同日口徑，就不下勝負結論。") +
      '<div class="compareAnchors"><a href="#comparison">比較總覽</a><a href="#metrics">五項指標</a><a href="#sources">資料口徑</a><a href="#universe">同類基金</a></div>' +
      '<div class="selectors"><label>富達核心基金<select id="fundSelect">' + fundOptions + '</select></label><b>VS</b><label>競品基金<select id="peerSelect">' + peerOptions + '</select></label></div>' +
      '<section id="comparison" class="compareLead"><div><small>' + peer.type + '</small><h2>' + cleanName(fund.name) + '<br><span>對比 ' + peer.name + '</span></h2><p>' + peer.note + '</p><button data-copy="' + escapeHtml(opening) + '">複製顧問式開場</button></div><div class="verified"><small>FIDELITY VERIFIED</small><b>' + pct(fund.y1) + '</b><span>近一年累計 · ' + fund.perfDate + '</span><b>' + fund.nav + '</b><span>最新淨值 · ' + fund.navDate + '</span></div></section>' +
      '<div class="keyData"><div><small>基金級別</small><b>' + fund.share + '</b><span>' + fund.asset + '</span></div><div><small>近一年累計</small><b>' + pct(fund.y1) + '</b><span>' + fund.perfDate + '</span></div><div><small>近三年累計</small><b>' + pct(fund.y3) + '</b><span>' + fund.perfDate + '</span></div><div><small>風險等級</small><b>' + fund.risk + '</b><span>數字越高風險越高</span></div><div><small>最新淨值</small><b>' + fund.nav + '</b><span>' + fund.navDate + '</span></div></div>' +
      '<div id="metrics" class="compareGrid"><section class="card radarCard"><div class="cardHead"><div><small>FIVE-METRIC RADAR</small><h2>五指標同類比較</h2></div><span>原始數字｜非主觀評分</span></div>' + radarChart(fund, peer) + '<p class="method">雷達圖只做同類池相對位置視覺化，不是星等，也不代表投資建議。風險採年化標準差；費用率採最高經理費；累積級別無配息紀錄時列 0.00%。</p></section>' +
      '<section id="sources" class="card evidence"><small>SOURCE AUDIT</small><h2>證據與口徑</h2><dl><div><dt>富達級別</dt><dd>' + fund.share + '</dd></div><div><dt>淨值</dt><dd>' + fund.nav + '<small>' + fund.navDate + '</small></dd></div><div><dt>績效</dt><dd>1Y ' + pct(fund.y1) + ' / 3Y ' + pct(fund.y3) + '<small>' + fund.perfDate + '</small></dd></div><div><dt>競品五指標</dt><dd>' + peerMetricEvidence + '</dd></div></dl><a href="' + fund.source + '" target="_blank" rel="noopener noreferrer">富達績效來源 ↗</a><a class="secondary" href="' + peer.source + '" target="_blank" rel="noopener noreferrer">競品績效來源 ↗</a>' + (hasCompleteMetrics(fund) ? '<a class="secondary" href="' + fund.metrics.basicSource + '" target="_blank" rel="noopener noreferrer">費用資料來源 ↗</a>' : '') + '</section></div>' +
      '<section id="universe" class="sectionHead"><div><small>PEER UNIVERSE</small><h2>' + cleanName(fund.name) + '競品池</h2></div><span>' + list.length + ' 檔</span></section><div class="peerTable table"><table><thead><tr><th>#</th><th>基金／比較摘要</th><th>可比性</th><th>一年績效</th><th>風險</th><th>費用率</th><th>動作</th></tr></thead><tbody>' + peerRows + '</tbody></table></div><p class="footnote peerAuditNote">資料查核：' + auditDate + '。一年績效為各基金 MoneyDJ 最新資料日的單筆申購累積報酬；風險為年化標準差；費用率為最高管理年費。成立未滿一年的級別改列可得的最長短期績效，不以假值補齊。各列資料日可能不同，請勿把未對齊日期的數字直接解讀為排名。</p><div class="peerGrid peerGridFallback">' + peerCards + '</div></div>';
  }

  function fullScript() {
    var fund = currentFund();
    return "「" + frames[state.mode] + "」\n\n我理解您的擔心。" + market.body + "\n\n" + fund.name + "要扮演的不是『下一檔一定上漲的基金』，而是" + fund.role + "。" + fund.thesis + "\n\n我們不需要一次判斷完市場；可以先設定符合承受度的起始比例，再用分批與固定檢視條件執行。基金仍有波動與本金損失風險，實際配置應依客戶投資期限與風險屬性調整。";
  }

  function renderScript() {
    var fund = currentFund();
    var fundOptions = options(funds, fund.id, "id", function (f) { return f.name; });
    var modeOptions = Object.keys(frames).map(function (mode) {
      return '<option value="' + mode + '"' + (mode === state.mode ? " selected" : "") + '>' + mode + '</option>';
    }).join("");
    var output = state.generated ?
      '<blockquote>「' + frames[state.mode] + '」</blockquote><h3>市場證據</h3><p>' + market.body + '</p><h3>產品角色</h3><p>' + fund.role + '。' + fund.thesis + '</p><h3>不靠預測的下一步</h3><p>先設定符合承受度的起始比例，再用分批與固定檢視條件執行。</p>' :
      '<div class="empty"><span>✦</span><h3>等待產生話術</h3><p>四種切角會改變問題定義與論證順序，不只是替換用字。</p></div>';
    return '<div class="page">' + title("CONVERSATION LAB", "話術實驗室", "創意負責打開對話，證據負責守住邏輯與法遵。") +
      '<section class="marketNote"><small>LIVE MARKET CONTEXT · 2026/09/04</small><h2>' + market.title + '</h2><p>' + market.body + '</p><div><a href="' + market.source + '" target="_blank" rel="noopener noreferrer">富達 8 月資產配置觀點 ↗</a><a href="' + market.fed + '" target="_blank" rel="noopener noreferrer">聯準會 9/3 談話 ↗</a></div></section>' +
      '<div class="scriptGrid"><section class="card form"><small>01 / CLIENT BRIEF</small><h2>建立客戶情境</h2><label>客戶描述<textarea id="clientText">' + escapeHtml(state.client) + '</textarea></label><label>主推基金<select id="scriptFund">' + fundOptions + '</select></label><label>創意切角<select id="modeSelect">' + modeOptions + '</select></label><button id="generateScript">產生話術 →</button></section>' +
      '<section class="card output ' + (state.generated ? "ready" : "") + '"><div class="cardHead"><div><small>02 / SALES NARRATIVE</small><h2>客製對話框架</h2></div>' + (state.generated ? '<button data-copy="' + escapeHtml(fullScript()) + '">複製全文</button>' : "") + '</div>' + output + '</section></div>' +
      '<section class="objections"><div class="sectionHead"><div><small>OBJECTION HANDLING</small><h2>快速異議處理</h2></div></div><div>' +
      objection("市場是不是太高？", "不以單一點位做全進全出；先確認組合集中風險，再用分批與風險預算控制進場。") +
      objection("為什麼不買 ETF？", "ETF 適合取得市場曝險；" + cleanName(fund.name) + "是否值得加入，要看它能否補足現有持股的風格與集中缺口。") +
      objection("競品最近報酬更好？", "先把級別、幣別、配息政策與資料日對齊；口徑不同時，不應直接宣稱勝負。") +
      '</div></section></div>';
  }

  function objection(question, answer) {
    return '<article><small>QUESTION</small><h3>' + question + '</h3><p>' + answer + '</p><button data-copy="' + escapeHtml(answer) + '">複製回答</button></article>';
  }

  function renderLibrary() {
    var q = state.query.toLowerCase();
    var list = funds.filter(function (f) {
      return (f.name + f.en + f.asset + f.theme).toLowerCase().indexOf(q) >= 0;
    });
    var rows = list.map(function (f) {
      return '<tr><td><b>' + f.name + '</b><small>' + f.share + '</small></td><td>' + f.asset + '<small>' + f.theme + '</small></td><td><span>' + f.risk + '</span></td><td class="green">' + pct(f.y1) + '<small>' + f.perfDate + '</small></td><td class="green">' + pct(f.y3) + '<small>' + f.perfDate + '</small></td><td><b>' + f.nav + '</b><small>' + f.navDate + '</small></td><td><a href="' + f.source + '" target="_blank" rel="noopener noreferrer">核對 ↗</a><button data-fund="' + f.id + '" title="另開比較頁">比較 ↗</button></td></tr>';
    }).join("");
    return '<div class="page">' + title("SOURCE-CONTROLLED DATABASE", "基金資料庫", "每一個數字都附資料日期與來源；不同日期不混用。") +
      '<label class="search">搜尋<input id="librarySearch" value="' + escapeHtml(state.query) + '" placeholder="基金、類型或策略…"></label><div class="table"><table><thead><tr><th>基金／級別</th><th>類型</th><th>風險</th><th>近一年累計</th><th>近三年累計</th><th>最新淨值</th><th>來源</th></tr></thead><tbody>' + rows + '</tbody></table></div><p class="footnote">境外基金資料來源：富達台灣基金總覽；台灣成長基金最新淨值來源：MoneyDJ。績效為原幣級別累計報酬，過去績效不代表未來。</p></div>';
  }

  function view() {
    if (state.page === "compare") return renderCompare();
    if (state.page === "script") return renderScript();
    if (state.page === "library") return renderLibrary();
    return renderHome();
  }

  function render() {
    var navigation = [
      ["home", "今日焦點"],
      ["compare", "競品決策室"],
      ["script", "話術實驗室"],
      ["library", "基金資料庫"]
    ].map(function (item, i) {
      return '<button data-page="' + item[0] + '" class="' + (state.page === item[0] ? "active" : "") + '"><em>0' + (i + 1) + '</em>' + item[1] + '</button>';
    }).join("");
    document.getElementById("app").innerHTML =
      '<div class="app"><aside class="rail"><div class="brand"><img src="fidelity-international.svg" alt="Fidelity International"><div><small>SALES INTELLIGENCE</small><span>內部業務決策平台</span></div></div><nav>' + navigation + '</nav><div class="railFoot"><i></i>DATA VERIFIED <small>查核時間 ' + auditDate + '</small></div></aside>' +
      '<main><header><span class="mobileBrand">Fidelity Sales Intelligence</span><span>INSTITUTIONAL SALES DESK</span><b>TAIWAN · 繁中</b></header>' + view() +
      '<footer>僅供內部業務參考，非基金排名或投資建議。基金有價格波動及本金損失風險；過去績效不代表未來。使用前請依最新公開說明書與法遵規範確認。</footer></main></div><div id="toast" class="toast" hidden>已複製到剪貼簿</div>';
    bind();
  }

  function bind() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-page]"), function (button) {
      button.addEventListener("click", function () {
        state.page = button.getAttribute("data-page");
        render();
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-go]"), function (button) {
      button.addEventListener("click", function () {
        var destination = button.getAttribute("data-go");
        if (destination === "compare") {
          openComparison(state.fundId, state.peerName);
          return;
        }
        state.page = destination;
        render();
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-fund]"), function (button) {
      button.addEventListener("click", function () {
        openComparison(button.getAttribute("data-fund"), "");
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-peer]"), function (button) {
      button.addEventListener("click", function () {
        openComparison(state.fundId, button.getAttribute("data-peer"));
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-copy]"), function (button) {
      button.addEventListener("click", function () {
        copyText(button.getAttribute("data-copy"));
      });
    });

    var fundSelect = document.getElementById("fundSelect");
    if (fundSelect) fundSelect.addEventListener("change", function () {
      state.fundId = fundSelect.value;
      state.peerName = "";
      render();
    });
    var peerSelect = document.getElementById("peerSelect");
    if (peerSelect) peerSelect.addEventListener("change", function () {
      state.peerName = peerSelect.value;
      render();
    });
    var scriptFund = document.getElementById("scriptFund");
    if (scriptFund) scriptFund.addEventListener("change", function () {
      state.fundId = scriptFund.value;
      state.generated = false;
      render();
    });
    var modeSelect = document.getElementById("modeSelect");
    if (modeSelect) modeSelect.addEventListener("change", function () {
      state.mode = modeSelect.value;
      state.generated = false;
      render();
    });
    var clientText = document.getElementById("clientText");
    if (clientText) clientText.addEventListener("input", function () {
      state.client = clientText.value;
      state.generated = false;
    });
    var generate = document.getElementById("generateScript");
    if (generate) generate.addEventListener("click", function () {
      state.client = document.getElementById("clientText").value;
      state.generated = true;
      render();
    });
    var search = document.getElementById("librarySearch");
    if (search) search.addEventListener("input", function () {
      state.query = search.value;
      render();
      var next = document.getElementById("librarySearch");
      if (next) {
        next.focus();
        next.setSelectionRange(next.value.length, next.value.length);
      }
    });
  }

  function copyText(text) {
    var area = document.createElement("textarea");
    area.value = text || "";
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    var toast = document.getElementById("toast");
    if (toast) {
      toast.hidden = false;
      window.setTimeout(function () { toast.hidden = true; }, 1500);
    }
  }

  restoreStateFromUrl();
  render();
  if (state.page === "compare" && window.location.hash) {
    window.requestAnimationFrame(function () {
      var target = document.getElementById(window.location.hash.slice(1));
      if (target) target.scrollIntoView();
    });
  }
}());
