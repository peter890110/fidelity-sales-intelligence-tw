(function () {
  "use strict";

  var auditDate = "2026/09/09";
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
    asOf:"2026/09/07",
    title:"就業轉強、成長動能略降；股票仍偏正向，但風險預算更重要",
    body:"富達 9 月 7 日市場週報指出，多重資產觀點仍維持股票加碼，但因領先指標顯示成長動能降溫而略為降低部位；企業獲利仍具韌性，日本與亞洲表現穩健，AI 資本支出持續支撐經濟活動。短期波動可能偏高，政策方向仍取決於後續通膨資料。",
    source:"https://www.fidelity.com.tw/insights-learning/market-insights/weekly-economic-insight-20260907/",
    secondary:"https://www.fidelity.com.tw/insights-learning/market-insights/be-invested-global-study/"
  };

  var state = {
    page:"home",
    fundId:"japan",
    peerName:"",
    client:"55 歲企業主，台股部位高，希望增加海外資產，但擔心市場估值偏高。",
    scenario:"auto",
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
    "反直覺破題":"翻轉客戶原本的問題，再把焦點拉回組合。",
    "故事比喻":"用基金專屬比喻說明配置角色。",
    "董事會精準":"用決策語言說清楚目的、限制與下一步。",
    "蘇格拉底提問":"先問出真正風險，再談產品。",
    "風險長官":"先揭露不適合條件，再說明如何使用。",
    "兩分鐘成交":"用最短路徑完成診斷、證據與下一步。"
  };

  var scenarioDefinitions = {
    auto:{label:"自動判讀客戶文字"},
    valuation:{
      label:"市場估值偏高／怕追高",
      tension:"怕現在買在高點，但也不想讓資金與既有部位原地不動",
      use:"把一次性的高點判斷，改成可管理的配置角色與分批決策",
      avoid:"把近一年高報酬直接外推成未來保證",
      market:"富達 9 月 7 日週報仍維持股票加碼，但已因成長動能降溫而略為降低部位；這支持「保留參與、降低單點判斷」，而不是全進或全退。",
      question:"如果市場先回檔再上漲，您比較不能接受的是短期帳面下跌，還是完全沒有參與？",
      next:"先定義可承受的最大回撤與資金使用期限，再把預算拆成三個檢視點；每次只在條件仍成立時執行。",
      objectionQ:"現在是不是已經太高？",
      objectionA:"沒有人能可靠鎖定高點。較可控的做法是先決定資金在整體組合的角色、可承受損失與分批規則。"
    },
    concentration:{
      label:"持股過度集中／需要分散",
      tension:"既有資產已經靠同一產業或市場賺很多，真正風險是單一劇本失效",
      use:"加入不同的獲利來源，降低單一市場對總資產的支配力",
      avoid:"只因基金名稱不同就誤以為已經分散",
      market:"富達最新週報指出區域機會正在轉移，日本與亞洲企業獲利仍具韌性；分散應看獲利驅動是否不同，而不只是基金檔數。",
      question:"若您最大的持股明年橫盤，組合中哪一部分仍能靠不同的企業獲利來源前進？",
      next:"先把現有持股按國家、產業與獲利驅動重新分組，再設定新增部位不得重複前三大風險來源。",
      objectionQ:"我手上的基金已經很多，還不夠分散嗎？",
      objectionA:"基金數量不等於風險來源數量。要看底層市場、產業與獲利因子是否仍高度重疊。"
    },
    income:{
      label:"現金流／配息需求",
      tension:"需要穩定支應生活或支出，但不能只看表面配息率",
      use:"先分清楚總報酬、收益來源與實際配息級別，再安排現金流",
      avoid:"把配息當成額外報酬，或忽略配息可能來自本金",
      market:"最新富達觀點認為信用利差仍偏低，收益資產不能只追逐較高票息；現金流規劃需同時檢查信用風險、波動與總報酬。",
      question:"您要的是每月固定入帳，還是三到五年後資產仍有足夠購買力？兩者需要不同級別與配置。",
      next:"先列出未來十二個月必要支出，再確認產品級別是否實際配息；其餘資金才用總報酬與風險效率比較。",
      objectionQ:"配息越高是不是越好？",
      objectionA:"不是。配息可能來自收益、資本利得或本金；必須把配息率、淨值變化與總報酬一起看。"
    },
    retirement:{
      label:"退休前後／重視下檔",
      tension:"需要讓資產繼續工作，但短期大幅回撤會影響生活計畫",
      use:"用損失預算決定部位上限，讓成長與防禦各自有明確任務",
      avoid:"用長期故事掩蓋短期資金用途",
      market:"富達最新週報預期短期波動可能偏高；退休情境下，比預測方向更重要的是保留生活預備金、控制波動來源並定期再平衡。",
      question:"未來三年內確定要用的錢有多少？那一段資金不應承擔股票型基金的完整波動。",
      next:"先把三年內支出與緊急預備金隔離，再由剩餘長期資金設定核心／衛星上限與半年檢視規則。",
      objectionQ:"我快退休了，還能承受這檔基金嗎？",
      objectionA:"要先看三年內現金需求與可接受回撤；不能因基金故事吸引，就讓短期生活資金承擔不相稱的波動。"
    },
    rates:{
      label:"利率方向不明／債券疑慮",
      tension:"不確定政策下一步，擔心存續期間或信用風險押錯方向",
      use:"把利率、信用與股債相關性的風險拆開管理",
      avoid:"把所有債券或多重資產都視為同一種防禦工具",
      market:"富達 9 月 7 日週報指出政策仍取決於通膨資料，殖利率上升提高存續期間吸引力，但股債若維持正相關，傳統分散效果可能下降。",
      question:"您真正擔心的是利率上升造成價格波動，還是景氣轉弱造成信用利差擴大？",
      next:"用利率上升、利率下降與信用利差擴大三種情境，檢查產品應扮演收益、避震或總報酬哪一個角色。",
      objectionQ:"現在利率方向不明，為什麼要動？",
      objectionA:"正因方向不明，才不該只押一個利率劇本；先拆開存續期間與信用曝險，再決定部位。"
    },
    cash:{
      label:"現金很多／一直等回檔",
      tension:"等待更便宜的價格很合理，但沒有執行規則容易變成永久觀望",
      use:"把「等感覺」改成有日期、有條件、有上限的部署計畫",
      avoid:"因害怕錯過而一次投入全部現金",
      market:"富達最新觀點仍偏正向但承認成長動能降溫與短期波動；這更適合條件式分批，而不是二選一。",
      question:"若市場未來六個月沒有出現您期待的回檔，這筆現金要到什麼日期才必須重新做決定？",
      next:"設定三個投入日期與兩個暫停條件；未觸發暫停時按紀律執行，不靠當天新聞決定。",
      objectionQ:"我想再等一次大跌，可以嗎？",
      objectionA:"可以保留等待資金，但需要截止日與重新評估條件，否則現金本身也承擔通膨與錯失參與的風險。"
    },
    growth:{
      label:"長期增值／尋找成長引擎",
      tension:"願意承受波動換取長期成長，但需要知道自己買的是哪一條獲利路徑",
      use:"把成長來源、持有期限與可接受回撤寫成可檢查的投資假設",
      avoid:"只因題材熱門或近期績效亮眼而進場",
      market:"富達最新週報認為企業獲利仍具韌性，AI 資本支出持續支撐活動，日本與亞洲表現穩健；成長機會存在，但區域與產業選擇更重要。",
      question:"您願意用幾年的時間等待這條企業獲利路徑兌現？若一年內反向波動，什麼條件才算原假設失效？",
      next:"先寫下持有年限、最大可接受回撤與兩項基本面檢視條件，再決定它是核心或衛星部位。",
      objectionQ:"近一年漲很多，現在還有成長空間嗎？",
      objectionA:"近期績效只證明過去發生過什麼；是否值得持有，要回到未來獲利驅動、估值與您能承受的波動。"
    }
  };

  var fundNarratives = {
    japan:{
      identity:"日本企業治理改革與價值重估",
      contrarian:"日本價值的重點不是日經指數還能漲多少，而是企業把閒置資本轉回股東價值的速度。",
      metaphor:"把它想成一座正在整修的老旅館：真正價值是資產效率與經營紀律被重新打開。",
      board:"新增這檔基金的目的，是用日本企業改革這條獲利路徑，降低既有科技與台股風險的支配力。",
      question:"如果台灣科技供應鏈休息一年，您是否願意讓日本企業資本效率改善成為第二條引擎？",
      role:"以日本價值股與企業治理改革，建立不同於純科技成長的海外股票曝險",
      diagnostic:"您想分散的是台幣與地區，還是台股科技循環本身？兩者需要不同的日本配置。",
      guardrail:"本基金為 RR4 股票型；日圓、景氣循環與價值風格都可能造成波動，不適合短期要用的資金。",
      etf:"日本 ETF 提供市場平均曝險；這檔基金的命題是主動辨識資本效率與治理改善，應以費用後風險調整結果檢驗。",
      peer:"日本基金風格差異很大；先分清價值、動能與大型均衡，再比較同幣別績效。"
    },
    bond:{
      identity:"全球債券收益與波動緩衝",
      contrarian:"債券的任務不是永遠上漲，而是在股票不配合時，讓組合仍有收益來源與可調整空間。",
      metaphor:"它更像避震器，不是引擎；好不好不能只看速度，而要看路況變差時整台車是否仍可控。",
      board:"新增這檔基金的目的，是建立全球債券收益與緩衝來源，而不是對單一降息時點下注。",
      question:"若股票回檔而利率仍高，您希望債券部位提供收益、資本利得，還是再平衡資金？",
      role:"透過全球配置、信用研究與存續期間管理，補進股票部位之外的收益與緩衝",
      diagnostic:"您需要的是低波動核心，還是願意承擔較高信用風險以追求較高收益？",
      guardrail:"本基金為 RR3，仍有利率、信用、匯率與非投資等級債風險；A 累積美元級別不直接配發現金。",
      etf:"債券 ETF 的規則透明；主動策略的價值要看能否在存續期間、地區與信用選擇上改善風險報酬。",
      peer:"策略收益債、美國收益債與全球優質債並非同一風險；需先拆開信用等級、地區與幣別。"
    },
    momentum:{
      identity:"跨資產動態調整",
      contrarian:"真正的動能配置不是追漲，而是承認不同資產的領先順序會改變，預先保留換檔權。",
      metaphor:"它像自動變速箱：價值不在永遠用最高檔，而在路況改變時能否及時換檔。",
      board:"新增這檔基金的目的，是把部分資產切換工作交給跨資產框架，避免每次都由客戶猜市場。",
      question:"您希望自己決定每次股債切換，還是讓一個明確的跨資產流程持續調整風險？",
      role:"用單一部位取得股票、債券與其他資產之間的動態調整能力",
      diagnostic:"您偏好穩定收益，還是容許配置主動偏移以爭取總報酬？",
      guardrail:"動態配置不代表保本，也可能在轉折初期判斷落後；應以完整週期與風險預算評估。",
      etf:"單一 ETF 只能固定取得一類曝險；可用多檔 ETF 自行再平衡，但需要持續判斷與執行紀律。",
      peer:"多重資產競品有收益型與動態型之分；不要只用近一年報酬跨類別排名。"
    },
    income:{
      identity:"全球多重資產收益",
      contrarian:"收益型投資最容易被配息率誤導；真正要管理的是配息後，資產淨值與購買力還剩多少。",
      metaphor:"它像一座有多種租戶的商場：重點不是某一家付最高租金，而是來源能否分散且資產維持價值。",
      board:"新增這檔基金的目的，是把收益來源分散到不同資產，而不是追逐單一高息證券。",
      question:"您要的是帳戶固定入帳，還是讓收益在基金內累積？目前選定的 A 累積級別屬於後者。",
      role:"以跨資產方式尋找多元收益來源，兼顧資本增值與下檔管理",
      diagnostic:"現金流金額、頻率與期間各是多少？若沒有這三個數字，就無法判斷級別是否合適。",
      guardrail:"目前比較的是 A 累積美元級別，沒有現金配發；需要入帳者必須另核對配息級別及配息來源。",
      etf:"高股息或債券 ETF 可提供規則型收益；此策略的差異在跨資產配置，仍要用總報酬與波動檢驗。",
      peer:"比較收益基金時，先分清累積與配息級別，再比較總報酬、波動、信用與股票比重。"
    },
    sustainable:{
      identity:"全球品質股息與永續",
      contrarian:"存股不是找最高殖利率，而是找有能力在景氣變化中維持現金流與資本紀律的企業。",
      metaphor:"它像挑發電廠：不是看今天輸出最大，而是看燃料、設備與治理能否讓電力長期穩定。",
      board:"新增這檔基金的目的，是用全球品質與股息韌性，降低純科技成長對組合的影響。",
      question:"如果高股息來自基本面惡化造成的股價下跌，您還會把它視為收入優勢嗎？",
      role:"聚焦具品質、股息韌性與永續特徵的全球企業，補足成長股集中",
      diagnostic:"您要的是實際現金入帳、較穩定的股息企業，還是 ESG 特徵？三者不能混為一談。",
      guardrail:"本基金仍是 RR4 股票型；A 累積級別不直接配息，股息策略也可能落後快速上漲的成長市場。",
      etf:"股息 ETF 依規則篩選；主動策略把企業品質、股息韌性與永續特徵一起納入，需檢查費用後結果。",
      peer:"系統化收益成長與全球股息股票策略不同，應先確認股票比重與收益來源。"
    },
    tech:{
      identity:"全球科技創新",
      contrarian:"投資科技最危險的不是錯過一個熱門名字，而是把題材熱度誤認成可持續的企業獲利。",
      metaphor:"它像投資整套技術堆疊，而不是只押聚光燈下的一顆晶片；價值來自誰能把研發轉成現金流。",
      board:"新增這檔基金的目的，是取得全球科技創新，而不是把既有台灣半導體曝險再複製一次。",
      question:"您的台股或美股部位已有多少 AI 與半導體？新增後得到的是分散，還是更集中？",
      role:"透過全球科技選股參與 AI、軟體、半導體與數位轉型的企業獲利",
      diagnostic:"您真正缺少的是全球軟體與服務，還是其實已高度集中在半導體硬體？",
      guardrail:"本基金為 RR4 科技股票型，產業集中與估值修正可能帶來大幅波動；不適合作為短期現金替代。",
      etf:"科技 ETF 提供規則型產業曝險；主動選股是否值得付費，要看能否改善費用後風險調整結果。",
      peer:"全球科技與美國科技並非完全同類；比較時必須標示地區與計價幣別差異。"
    },
    asia:{
      identity:"亞洲結構性成長",
      contrarian:"亞洲不是單一市場；真正機會來自國家、產業與企業分化，而不是押一個亞洲指數方向。",
      metaphor:"它像一組港口航線：台灣、韓國、印度與東南亞各有不同貨物與景氣，不能只看一個潮位。",
      board:"新增這檔基金的目的，是把成長來源從單一美國或台灣市場，擴展到亞洲不同企業週期。",
      question:"您想補的是亞洲消費、供應鏈，還是數位化？若答案不清楚，容易與既有台股重疊。",
      role:"從亞洲供應鏈、消費升級與數位化中尋找結構性成長",
      diagnostic:"現有台股部位已涵蓋哪些亞洲供應鏈？新增基金後的非台灣曝險才是真正分散。",
      guardrail:"本基金為 RR5 股票型，國家、政策、匯率與新興市場波動較高，需要較長持有期。",
      etf:"亞洲 ETF 取得區域平均；主動策略著重跨國分化與企業選擇，應檢查集中度與費用後結果。",
      peer:"亞洲股票與新興亞洲範圍不同，成熟亞洲與國家權重需要先對齊。"
    },
    taiwan:{
      identity:"台灣主動成長選股",
      contrarian:"對已重押台股的客戶，最專業的答案可能不是再買一檔台股基金，而是先證明它帶來的新風險來源足夠不同。",
      metaphor:"它像在熟悉的主場挑選更好的先發名單；但若整個資產都在同一球場，換球員不等於換風險。",
      board:"新增這檔基金的目的，是主動掌握台灣成長企業；前提是台股總上限仍符合風險預算。",
      question:"新增後，台股占可投資資產會到多少？若市場回檔三成，是否影響公司與家庭現金流？",
      role:"主動選擇台灣具成長性與競爭力的企業，掌握產業升級",
      diagnostic:"您是要優化既有台股部位，還是增加台股總曝險？這是兩個完全不同的決策。",
      guardrail:"本基金為 RR4 台股股票型；若已有高台股或企業資產曝險，可能增加而非降低集中風險。",
      etf:"台股 ETF 提供市場或因子曝險；主動基金的價值要以選股差異、集中度與費用後風險效率證明。",
      peer:"台灣科技、一般股票與 5G 主題的集中度不同，不能只以報酬率排序。"
    },
    em:{
      identity:"全球新興市場分化",
      contrarian:"新興市場不是一筆風險交易，而是一組政策、貨幣與企業週期不同的國家。",
      metaphor:"它像一籃正在轉型的城市：有的靠製造、有的靠消費、有的靠資源，不能用同一張地圖判斷。",
      board:"新增這檔基金的目的，是取得成熟市場之外的成長來源，同時把國家與政策風險控制在衛星部位。",
      question:"您願意承受多大的匯率與政策波動，來換取成熟市場之外的成長機會？",
      role:"以在地研究辨識新興市場的國家、產業與企業差異，增加結構性成長來源",
      diagnostic:"您要的是美元走弱受惠、亞洲科技，還是更廣泛的新興市場消費？不同答案代表不同曝險。",
      guardrail:"本基金為 RR5 股票型，匯率、政策、流動性與公司治理風險較高，適合作為受控的長期衛星部位。",
      etf:"新興市場 ETF 容易被大型國家權重主導；主動策略的價值在國家與企業選擇，仍需用費用後結果驗證。",
      peer:"同類新興市場基金也可能有顯著國家偏離；比較前需看區域與產業權重。"
    }
  };

  function includesAny(text, words) {
    return words.some(function (word) { return text.indexOf(word) >= 0; });
  }

  var modeBlueprints = {
    "反直覺破題":{journey:"表面問題 → 真正風險 → 重寫決策 → 證據 → 行動",tone:"先翻轉直覺，再把焦點拉回可控的組合決策。"},
    "故事比喻":{journey:"場景 → 衝突 → 角色 → 轉折 → 下一章",tone:"用基金專屬故事，讓抽象配置變成可記住的畫面。"},
    "董事會精準":{journey:"決策案 → 採用理由 → 通過條件 → 否決條件 → KPI",tone:"像向董事會提案：目的、限制、數據與決議一頁說清楚。"},
    "蘇格拉底提問":{journey:"第一問 → 追問 → 自我辨識 → 共同結論 → 小承諾",tone:"不急著說服，讓客戶從答案中自己看見配置缺口。"},
    "風險長官":{journey:"先說不適合 → 壓力測試 → 暴露檢查 → 允許條件 → 護欄",tone:"先揭露風險與不適合條件，再討論產品能否進入組合。"},
    "兩分鐘成交":{journey:"0–20秒 → 20–45秒 → 45–75秒 → 75–100秒 → 120秒",tone:"限時完成洞察、診斷、產品角色、證據與下一步。"}
  };

  function analyzeClient(text, fundId, selectedScenario) {
    var source = String(text || "").replace(/\s+/g, " ").trim();
    var ageMatch = source.match(/(\d{2})\s*歲/);
    var age = ageMatch ? Number(ageMatch[1]) : null;
    var amountMatch = source.match(/(\d+(?:\.\d+)?)\s*(億|萬)(?:元)?/);
    var amount = amountMatch ? amountMatch[1] + amountMatch[2] : "未提供";
    var lifeStage = age === null ? "待確認" : age < 35 ? "累積初期" : age < 50 ? "資產擴張期" : age < 65 ? "退休準備期" : "退休提領期";
    var persona = includesAny(source, ["企業主","老闆","公司負責人","創業"]) ? "企業主" :
      includesAny(source, ["退休","退休族"]) ? "退休規劃族" :
      includesAny(source, ["醫師","律師","會計師","專業人士"]) ? "專業人士" :
      includesAny(source, ["工程師","上班族","受薪"]) ? "受薪投資人" : "投資人";
    var holdings = [];
    if (includesAny(source, ["台股","台積電","台灣股票"])) holdings.push("台股");
    if (includesAny(source, ["科技","半導體","AI"])) holdings.push("科技股");
    if (includesAny(source, ["美股","S&P","納斯達克"])) holdings.push("美股");
    if (includesAny(source, ["現金","定存"])) holdings.push("現金");
    if (includesAny(source, ["債券","債"])) holdings.push("債券");
    var holding = holdings.length ? holdings.join("＋") : "既有部位待確認";
    var goals = [];
    if (includesAny(source, ["配息","現金流","收益","領息"])) goals.push("現金流");
    if (includesAny(source, ["退休","保本","穩健"])) goals.push("退休穩健");
    if (includesAny(source, ["海外","分散","全球"])) goals.push("海外分散");
    if (includesAny(source, ["成長","增值","報酬"])) goals.push("長期增值");
    var goal = goals.length ? goals.join("＋") : "提升組合效率";
    var horizon = includesAny(source, ["半年內","一年內","兩年內","短期","很快要用"]) ? "0–2 年" :
      includesAny(source, ["三年","四年","中期"]) ? "3–5 年" :
      includesAny(source, ["五年","十年","長期"]) ? "5 年以上" : "待確認";
    var liquidity = includesAny(source, ["每月","生活費","醫療","買房","學費","很快要用","現金流"]) ? "高" :
      includesAny(source, ["長期","十年","不用這筆錢"]) ? "低" : "待確認";
    var riskTolerance = includesAny(source, ["不能跌","不能接受本金","不能承受","本金明顯下跌","保本","非常保守","低風險","怕虧"]) ? "低" :
      includesAny(source, ["積極","高風險","能承受","波動沒關係"]) ? "高" : "中／待確認";
    var experience = includesAny(source, ["第一次","新手","沒買過"]) ? "初次投資" :
      includesAny(source, ["投資多年","有經驗","長期投資"]) ? "有經驗" : "待確認";
    var scenario = selectedScenario;
    if (!scenario || scenario === "auto") {
      if (includesAny(source, ["高點","估值","太高","追高","泡沫"])) scenario = "valuation";
      else if (includesAny(source, ["配息","現金流","收益","領息"])) scenario = "income";
      else if (includesAny(source, ["退休","保本","不能跌","低風險"])) scenario = "retirement";
      else if (includesAny(source, ["集中","重押","部位高","單一"])) scenario = "concentration";
      else if (includesAny(source, ["利率","升息","降息","債券"])) scenario = "rates";
      else if (includesAny(source, ["現金很多","定存","等回檔","觀望"])) scenario = "cash";
      else scenario = "growth";
    }
    var selectedFund = funds.filter(function (f) { return f.id === fundId; })[0];
    var alerts = [];
    if (horizon === "0–2 年" && (selectedFund.risk === "RR4" || selectedFund.risk === "RR5")) {
      alerts.push("期限警示：0–2 年可能使用的資金，不宜承擔 " + selectedFund.risk + " 股票型基金的完整波動。");
    }
    if (fundId === "taiwan" && holdings.indexOf("台股") >= 0) {
      alerts.push("集中度警示：已有台股部位，新增台灣成長基金可能加重單一市場風險，必須先設定台股總上限。");
    }
    if (fundId === "tech" && (holdings.indexOf("科技股") >= 0 || holdings.indexOf("台股") >= 0)) {
      alerts.push("重疊警示：全球科技可能與既有台股／科技持倉重疊，應先穿透檢查半導體與 AI 曝險。");
    }
    if (scenario === "income" && selectedFund.metrics.distribution === 0) {
      alerts.push("級別警示：選定的是累積級別，沒有現金配發；不可把它當成配息工具銷售。");
    }
    if (scenario === "retirement" && selectedFund.risk === "RR5") {
      alerts.push("適合度警示：本基金為 RR5；三年內生活支出不得承擔其完整波動，只能評估長期衛星資金。");
    }
    if (riskTolerance === "低" && (selectedFund.risk === "RR4" || selectedFund.risk === "RR5")) {
      alerts.push("風險屬性警示：客戶文字顯示低風險承受度，與 " + selectedFund.risk + " 產品可能不匹配，應先停止銷售並完成適合度確認。");
    }
    var alert = alerts.length ? alerts.join(" ") : "仍需依風險屬性、投資期限、資金用途與法遵規範完成適合度確認。";
    var signals = [
      {label:"生命階段",value:lifeStage},
      {label:"客戶身分",value:persona},
      {label:"既有重心",value:holding},
      {label:"核心目標",value:goal},
      {label:"可用期限",value:horizon},
      {label:"流動性需求",value:liquidity},
      {label:"風險承受度",value:riskTolerance},
      {label:"投資經驗",value:experience}
    ];
    return {
      source:source, age:age, amount:amount, lifeStage:lifeStage, persona:persona, holdings:holdings, holding:holding,
      goal:goal, scenario:scenario, horizon:horizon, liquidity:liquidity, riskTolerance:riskTolerance,
      experience:experience, alert:alert, signals:signals,
      summary:(age ? age + "歲 · " : "") + persona + "｜" + lifeStage + "｜既有 " + holding + "｜目標 " + goal + "｜" + scenarioDefinitions[scenario].label
    };
  }

  function clientAdjustments(client, fund) {
    var stageDecision = client.lifeStage === "累積初期" ?
      "以長期累積為主，但先確認緊急預備金；短期績效不作為進出依據。" :
      client.lifeStage === "資產擴張期" ?
      "同時盤點家庭負債、事業與既有投資，避免新增部位擴大同一景氣風險。" :
      client.lifeStage === "退休準備期" ?
      "切出三年內確定支出，再以剩餘長期資金討論成長部位，降低退休前的報酬順序風險。" :
      client.lifeStage === "退休提領期" ?
      "先建立十二至三十六個月支出緩衝，高波動基金只能使用不影響提領計畫的長期資金。" :
      "年齡與人生階段尚未確認；先問資金何時會被使用，再決定可承受的波動週期。";
    var personaDecision = client.persona === "企業主" ?
      "把企業營運風險與家庭金融資產分開盤點，避免基金再次複製公司本業或台股景氣風險。" :
      client.persona === "退休規劃族" ?
      "以生活支出穩定度為優先，不用單一高報酬敘事取代提領與風險規劃。" :
      client.persona === "專業人士" ?
      "用決策條件與風險預算溝通，將產品功能連結到其收入與資產結構。" :
      client.persona === "受薪投資人" ?
      "將投入節奏與固定收入、緊急預備金連動，避免一次性市場判斷。" :
      "客戶身分尚不明確；先確認收入穩定性與主要財富來源。";
    var holdingDecision = client.holdings.length ?
      "既有重心為" + client.holding + "；必須穿透檢查國家、產業、幣別與獲利因子，證明新增的是不同風險來源。" :
      "既有持倉尚未提供；完成底層曝險盤點前，不把任何基金稱為分散。";
    var goalDecision = client.goal.indexOf("現金流") >= 0 ?
      "現金流需求先核對實際配息級別、配息來源與總報酬；累積級別不可當成入帳工具。" :
      client.goal.indexOf("退休穩健") >= 0 ?
      "以可承受回撤與支出不中斷為成功標準，不以最高報酬為唯一目標。" :
      client.goal.indexOf("海外分散") >= 0 ?
      "分散的成功標準是降低原有風險來源的支配力，不是單純增加基金檔數。" :
      client.goal.indexOf("長期增值") >= 0 ?
      "把成長來源、持有期限與基本面失效條件寫清楚，再決定核心或衛星角色。" :
      "目標仍偏抽象；先把『提升效率』拆成收益、波動或成長三者的優先順序。";
    var horizonDecision = client.horizon === "0–2 年" ?
      "短期會用到的資金先排除，" + fund.risk + " 產品只使用期限足以承受完整週期的部分。" :
      client.horizon === "3–5 年" ?
      "用中期檢視點管理，不因單季波動改變原假設；同時保留到期前的降風險路徑。" :
      client.horizon === "5 年以上" ?
      "可用長期基本面與完整週期檢驗，但仍需預先定義最大可接受回撤。" :
      "期限尚未確認；在知道何時用錢前，不提出部位比例。";
    var liquidityDecision = client.liquidity === "高" ?
      "先列出未來十二個月必要現金需求；這部分不得承擔淨值波動，也不能假設累積級別會配息。" :
      client.liquidity === "低" ?
      "可把焦點放在長期總報酬，但仍保留緊急資金與定期再平衡機制。" :
      "流動性需求待確認；先問未來一年是否有買房、醫療、教育或事業支出。";
    var riskDecision = client.riskTolerance === "低" ?
      "文字顯示低風險承受度；先停止產品推進並用具體金額確認最大可接受損失，若與 " + fund.risk + " 不相容就不建議。" :
      client.riskTolerance === "高" ?
      "即使能承受波動，也需設定單一主題與單一市場上限，不能把承受度當成集中投資許可。" :
      "風險承受度尚未量化；以『若下跌多少會改變生活或被迫賣出』取得具體界線。";
    var experienceDecision = client.experience === "初次投資" ?
      "用原始數字與情境說明，不用術語或績效排名施壓；先採最小可理解、可回顧的決策。" :
      client.experience === "有經驗" ?
      "可直接比較費用後報酬、波動、Sharpe、持倉重疊與失效條件，避免只談故事。" :
      "投資經驗待確認；先確認是否理解匯率、淨值波動與累積／配息級別差異。";
    return [
      "生命階段｜" + stageDecision,
      "客戶身分｜" + personaDecision,
      "既有持倉｜" + holdingDecision,
      "投資目標｜" + goalDecision,
      "資金期限｜" + horizonDecision,
      "流動性｜" + liquidityDecision,
      "風險承受度｜" + riskDecision,
      "投資經驗｜" + experienceDecision
    ];
  }

  function makeOpening(profile, scene, client) {
    var who = (client.age ? client.age + "歲、" : "") + client.lifeStage + "的" + client.persona;
    var position = client.holding === "既有部位待確認" ? "既有配置尚待盤點" : "目前以" + client.holding + "為重心";
    if (state.mode === "故事比喻") return profile.metaphor + " 對一位" + who + "而言，" + position + "，這次不是多買一檔產品，而是替組合安排新的角色。";
    if (state.mode === "董事會精準") return "決策案：" + profile.board + " 客戶條件：" + who + "、" + position + "；主要限制：" + scene.avoid + "。";
    if (state.mode === "蘇格拉底提問") return "我先不介紹產品。想先請教：" + profile.question + " 您的答案會決定這檔基金是否有存在必要。";
    if (state.mode === "風險長官") return "先說結論：若資金期限、損失承受度或流動性不合，本案不應成立。" + profile.guardrail;
    if (state.mode === "兩分鐘成交") return who + "，" + position + "。我用兩分鐘說清楚一件事：是否需要用「" + profile.identity + "」處理「" + scene.tension + "」。";
    return "表面上您在問市場時點；真正要決定的是：" + position + "的情況下，是否需要" + scene.use + "。";
  }

  function objectionStyle(question, answer, pack, index) {
    var mode = state.mode;
    if (mode === "故事比喻") return "把這個疑問放回剛才的故事：" + pack.profile.metaphor + " " + answer + " 所以下一步不是猜結局，而是檢查這個角色是否真的補上組合缺口。";
    if (mode === "董事會精準") return "結論：" + answer + " 通過條件：" + pack.questions[index % pack.questions.length] + " 未通過就不執行。";
    if (mode === "蘇格拉底提問") return "我不先反駁。想請您先回答：「" + pack.questions[index % pack.questions.length] + "」如果答案顯示現有組合已有同樣功能，就沒有新增的必要；若沒有，再用資料驗證。";
    if (mode === "風險長官") return "這個疑慮成立，不能淡化。風險界線是：" + pack.boundary + " 在界線內才討論：" + answer;
    if (mode === "兩分鐘成交") return "短答：" + answer + " 今天只確認角色、上限與下一個檢視點，不做報酬承諾。";
    return "真正的問題不是「" + question + "」，而是這個選擇是否改善整體組合。" + answer;
  }

  function composeModeSections(pack) {
    var c = pack.client;
    var a = pack.adjustments;
    var numbers = pack.metricProof;
    if (state.mode === "故事比喻") return [
      {title:"場景｜客戶現在站在哪裡",text:(c.age ? c.age + "歲" : "年齡待確認") + "的" + c.persona + "，位於" + c.lifeStage + "，既有重心為" + c.holding + "，希望做到" + c.goal + "。"},
      {title:"衝突｜兩個都不想失去",text:pack.scene.tension + "；同時還要顧到" + c.horizon + "的資金期限與" + c.liquidity + "流動性需求。"},
      {title:"角色｜這檔基金負責什麼",text:pack.profile.metaphor + " 在組合裡，它的工作是" + pack.role},
      {title:"轉折｜用證據而非情緒",text:pack.evidence + " " + numbers},
      {title:"下一章｜客戶要做的動作",text:a[0] + " " + pack.next},
      {title:"故事不能越過的線",text:pack.boundary}
    ];
    if (state.mode === "董事會精準") return [
      {title:"決策案",text:pack.profile.board},
      {title:"採用理由",text:"客戶為" + c.lifeStage + "、目標是" + c.goal + "；本案要處理的是「" + pack.scene.use + "」。" + pack.role},
      {title:"通過條件",text:pack.questions[0] + " 並確認：" + a[0]},
      {title:"否決條件",text:pack.scene.avoid + "；若出現以下情況，本案不通過：" + c.alert},
      {title:"監測 KPI",text:numbers + " 後續以角色達成度、風險上限與檢視條件追蹤，不以單一期績效下結論。"},
      {title:"決議與負責人",text:pack.next + " 由業務完成資料核對，客戶確認資金用途與可接受回撤後再決定。"}
    ];
    if (state.mode === "蘇格拉底提問") return [
      {title:"第一問｜您真正怕的是什麼？",text:pack.scene.question},
      {title:"第二問｜現有組合缺哪個功能？",text:pack.profile.diagnostic},
      {title:"第三問｜期限允許嗎？",text:"這筆資金可用期限是" + c.horizon + "；若先下跌，哪一個生活或事業計畫會被迫改變？"},
      {title:"第四問｜重疊還是分散？",text:"既有重心是" + c.holding + "。新增後，是增加不同獲利來源，還是再次承擔同一風險？"},
      {title:"共同結論｜讓答案決定產品",text:"只有當上述答案支持「" + pack.profile.identity + "」確實補上缺口，才進入基金比較。" + pack.role},
      {title:"最小承諾｜先同意一個動作",text:a[0] + " " + pack.next}
    ];
    if (state.mode === "風險長官") return [
      {title:"先說不適合",text:pack.boundary},
      {title:"客戶脆弱點",text:"生命階段：" + c.lifeStage + "；期限：" + c.horizon + "；流動性：" + c.liquidity + "；風險承受度：" + c.riskTolerance + "。"},
      {title:"壓力測試",text:"假設市場先出現一段不利走勢，請回答：" + pack.scene.question},
      {title:"暴露檢查",text:a.join(" ")},
      {title:"允許進場的條件",text:"只在資金用途、風險上限與產品角色都可被書面說清楚時評估。" + pack.role},
      {title:"執行護欄",text:pack.next + " " + numbers}
    ];
    if (state.mode === "兩分鐘成交") return [
      {title:"0–20 秒｜點出真正問題",text:"您是" + c.lifeStage + "的" + c.persona + "，目前" + c.holding + "，真正風險不是錯過一檔基金，而是" + pack.scene.tension + "。"},
      {title:"20–45 秒｜確認需求",text:pack.questions[0] + " " + pack.questions[1]},
      {title:"45–75 秒｜一句話產品角色",text:pack.role},
      {title:"75–100 秒｜只給可核對證據",text:pack.evidence + " " + numbers},
      {title:"100–115 秒｜先畫風險線",text:pack.boundary},
      {title:"115–120 秒｜取得下一步",text:pack.next}
    ];
    return [
      {title:"表面問題",text:"客戶說的是「" + pack.scene.label + "」，表面焦慮是：" + pack.scene.tension + "。"},
      {title:"真正風險",text:"真正風險不是單一點位，而是" + c.holding + "無法支撐「" + c.goal + "」。" + a[0]},
      {title:"重寫決策",text:"不問『現在會不會漲』，改問：" + pack.questions[0] + " " + pack.role},
      {title:"用證據推翻直覺",text:pack.evidence + " " + numbers},
      {title:"不能偷換概念",text:pack.scene.avoid + "；風險界線：" + pack.boundary},
      {title:"把觀點變成動作",text:pack.next + " " + pack.close}
    ];
  }

  function buildScriptPackage() {
    var fund = currentFund();
    var profile = fundNarratives[fund.id];
    var client = analyzeClient(state.client, fund.id, state.scenario);
    var scene = scenarioDefinitions[client.scenario];
    var metricProof = "公開級別 " + fund.share + "；截至 " + fund.metrics.asOf + "，近一年累積報酬 " + Number(fund.metrics.y1).toFixed(2) + "%、年化標準差 " + Number(fund.metrics.risk).toFixed(2) + "%、夏普值 " + Number(fund.metrics.sharpe).toFixed(2) + "、最高管理年費 " + Number(fund.metrics.expense).toFixed(2) + "%。";
    var role = profile.role + "。在「" + scene.label + "」情境下，它不是用來" + scene.avoid + "，而是用來" + scene.use + "。";
    if (fund.id === "taiwan" && client.holdings.indexOf("台股") >= 0) {
      role = cleanName(fund.name) + "不能被定位成分散工具；只有在取代重複台股部位、而非增加台股總曝險，且能證明選股差異時才值得評估。";
    } else if (fund.id === "tech" && (client.holdings.indexOf("科技股") >= 0 || client.holdings.indexOf("台股") >= 0)) {
      role = "全球科技不能直接稱為分散；必須先穿透既有持股，確認新增的是不同獲利來源，而非再次疊加半導體與 AI 風險。";
    } else if (client.scenario === "income" && fund.metrics.distribution === 0) {
      role = profile.role + "；但 " + fund.share + " 是累積級別，只能以總報酬累積工具討論，不能包裝成現金配息方案。";
    } else if (client.scenario === "retirement" && fund.risk === "RR5") {
      role = profile.role + "；退休情境只能評估長期衛星資金，不得動用三年內生活支出。";
    }
    var questions = [profile.diagnostic, scene.question];
    var pack = {
      fund:fund, profile:profile, client:client, scene:scene,
      opening:makeOpening(profile, scene, client), role:role, questions:questions,
      evidence:scene.market, metricProof:metricProof,
      next:scene.next, boundary:client.alert + " " + profile.guardrail,
      close:"如果這個角色符合您的目標，今天先不押方向；先完成風險上限、資金期限與檢視條件，再決定是否納入。"
    };
    pack.adjustments = clientAdjustments(client, fund);
    var baseObjections = [
      {q:scene.objectionQ,a:scene.objectionA + " 對" + cleanName(fund.name) + "而言，核心檢驗是能否完成「" + profile.identity + "」的組合任務。"},
      {q:"為什麼不直接買 ETF？",a:profile.etf + " 這不是主動一定優於被動，而是比較費用後是否取得需要的配置差異。"},
      {q:"競品最近報酬比較好，為什麼還看這檔？",a:profile.peer + " 先對齊級別、幣別、資料日、投資範圍與風險，再談適合度；不以單一期績效下勝負結論。"}
    ];
    pack.objections = baseObjections.map(function (item, index) {
      return {q:item.q,a:objectionStyle(item.q, item.a, pack, index)};
    });
    pack.sections = composeModeSections(pack);
    return pack;
  }


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
      '<section class="marketBar"><div><small>MARKET SIGNAL / 09.07</small><h2>' + market.title + '</h2></div><p>' + market.body + '</p><a href="' + market.source + '" target="_blank" rel="noopener noreferrer">富達觀點 ↗</a></section>' +
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
    var pack = buildScriptPackage();
    var signals = pack.client.signals.map(function (item) { return item.label + "：" + item.value; }).join("｜");
    var adjustments = pack.adjustments.map(function (item, index) { return (index + 1) + ". " + item; }).join("\n");
    var sections = pack.sections.map(function (item) { return "【" + item.title + "】\n" + item.text; }).join("\n\n");
    var objections = pack.objections.map(function (item) { return "Q：" + item.q + "\nA：" + item.a; }).join("\n\n");
    return "【客戶判讀】\n" + pack.client.summary +
      "\n" + signals +
      "\n\n【採用框架】\n" + state.mode + "｜" + modeBlueprints[state.mode].journey +
      "\n\n【開場】\n「" + pack.opening + "」" +
      "\n\n" + sections +
      "\n\n【因客戶條件而改寫】\n" + adjustments +
      "\n\n【異議處理】\n" + objections +
      "\n\n基金有價格波動及本金損失風險，過去績效不代表未來；實際配置應依客戶適合度與最新公開說明書確認。";
  }

  function renderSignal(item) {
    return '<div class="signalItem"><small>' + escapeHtml(item.label) + '</small><b>' + escapeHtml(item.value) + '</b></div>';
  }

  function renderNarrativeSection(item, index) {
    return '<section><small>0' + (index + 1) + '</small><h3>' + escapeHtml(item.title) + '</h3><p' + (item.title.indexOf("證據") >= 0 || item.title.indexOf("KPI") >= 0 ? ' class="proofLine"' : '') + '>' + escapeHtml(item.text) + '</p></section>';
  }

  function renderScript() {
    var fund = currentFund();
    var pack = buildScriptPackage();
    var blueprint = modeBlueprints[state.mode];
    var fundOptions = options(funds, fund.id, "id", function (f) { return f.name; });
    var scenarioOptions = Object.keys(scenarioDefinitions).map(function (scenario) {
      return '<option value="' + scenario + '"' + (scenario === state.scenario ? " selected" : "") + '>' + scenarioDefinitions[scenario].label + '</option>';
    }).join("");
    var modeOptions = Object.keys(frames).map(function (mode) {
      return '<option value="' + mode + '"' + (mode === state.mode ? " selected" : "") + '>' + mode + '</option>';
    }).join("");
    var signalGrid = pack.client.signals.map(renderSignal).join("");
    var adjustmentList = pack.adjustments.map(function (item) { return '<li>' + escapeHtml(item) + '</li>'; }).join("");
    var narrativeSections = pack.sections.map(renderNarrativeSection).join("");
    var output = state.generated ?
      '<div class="narrativeBlueprint"><div><small>SELECTED BLUEPRINT</small><b>' + escapeHtml(state.mode) + '</b></div><span>' + escapeHtml(blueprint.journey) + '</span></div>' +
      '<div class="clientRead"><small>CLIENT SIGNALS · 實際改寫依據</small><b>' + escapeHtml(pack.client.summary) + '</b><div class="signalGrid">' + signalGrid + '</div></div>' +
      '<div class="personalization"><small>WHY THIS VERSION IS DIFFERENT</small><h3>因這位客戶的條件，話術已作以下調整</h3><ol>' + adjustmentList + '</ol></div>' +
      '<blockquote>「' + escapeHtml(pack.opening) + '」</blockquote>' +
      '<div class="talkGrid" data-blueprint="' + escapeHtml(state.mode) + '">' + narrativeSections + '</div>' +
      '<div class="guardrail"><strong>最終風險界線</strong><p>' + escapeHtml(pack.boundary) + '</p></div>' :
      '<div class="empty"><span>✦</span><h3>等待產生話術</h3><p>基金、客戶文字、主要情境與創意切角會共同改變完整對話。</p></div>';
    return '<div class="page">' + title("CONVERSATION LAB", "話術實驗室", "同一檔基金，面對不同客戶與情境，不應說同一套話。") +
      '<section class="marketNote"><small>LIVE MARKET CONTEXT · ' + market.asOf + '</small><h2>' + market.title + '</h2><p>' + market.body + '</p><div><a href="' + market.source + '" target="_blank" rel="noopener noreferrer">富達 9/7 市場週報 ↗</a><a href="' + market.secondary + '" target="_blank" rel="noopener noreferrer">2026 全球投資人研究 ↗</a></div></section>' +
      '<div class="scriptGrid"><section class="card form"><small>01 / CLIENT BRIEF</small><h2>建立客戶情境</h2><label>客戶描述<textarea id="clientText" placeholder="例如：55歲企業主，台股與公司資產高度相關，希望增加海外配置，但怕追高。">' + escapeHtml(state.client) + '</textarea></label><label>主推基金<select id="scriptFund">' + fundOptions + '</select></label><label>主要情境<select id="scenarioSelect">' + scenarioOptions + '</select></label><small class="fieldInsight"><b>' + escapeHtml(pack.scene.label) + '</b>' + escapeHtml(pack.scene.tension) + '</small><label>創意切角<select id="modeSelect">' + modeOptions + '</select></label><small class="fieldInsight modeInsight"><b>' + escapeHtml(state.mode) + '</b>' + escapeHtml(blueprint.tone) + '<em>' + escapeHtml(blueprint.journey) + '</em></small><button id="generateScript">產生專屬話術 →</button><p class="formPromise">每個欄位都會改變論證順序、段落名稱、問題、異議回答與下一步。</p></section>' +
      '<section class="card output ' + (state.generated ? "ready" : "") + '"><div class="cardHead"><div><small>02 / SALES NARRATIVE</small><h2>' + (state.generated ? escapeHtml(state.mode) + '對話稿' : '客製對話框架') + '</h2></div>' + (state.generated ? '<button data-copy="' + escapeHtml(fullScript()) + '">複製全文</button>' : "") + '</div>' + output + '</section></div>' +
      '<section class="objections"><div class="sectionHead"><div><small>OBJECTION HANDLING · ' + escapeHtml(state.mode) + '</small><h2>' + cleanName(fund.name) + '｜' + pack.scene.label + '</h2><p>回答語氣與推進方式也會依切角重寫，不只替換基金名稱。</p></div></div><div>' +
      pack.objections.map(function (item) { return objection(item.q, item.a); }).join("") +
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
    var scenarioSelect = document.getElementById("scenarioSelect");
    if (scenarioSelect) scenarioSelect.addEventListener("change", function () {
      state.scenario = scenarioSelect.value;
      state.generated = false;
      render();
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
