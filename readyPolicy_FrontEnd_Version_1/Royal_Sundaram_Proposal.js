var test = {
    "Header": {
       "header": {
          "sender": {
             "reply-to": "cn=B2C-JVM,cn=B2C-JVM,cn=soap nodes,o=AXAIN,cn=cordys,cn=CordysBOP4UAT,o=axa_sgp.axa-ap.intraxa",
             "organizationalContext": "o=AXAIN,cn=cordys,cn=CordysBOP4UAT,o=axa_sgp.axa-ap.intraxa",
             "component": "cn=B2C-JVM,cn=soap nodes,o=AXAIN,cn=cordys,cn=CordysBOP4UAT,o=axa_sgp.axa-ap.intraxa"
          },
          "receiver": {
             "component": "cn=webgateway@sgp-bopuat02,cn=cordys,cn=CordysBOP4UAT,o=axa_sgp.axa-ap.intraxa",
             "sent-to": "socket://127.0.0.1:63083/"
          },
          "msg-id": "005056B2-23FD-71E2-92BF-A1D9B04850AF"
       }
    },
    "Body": {
       "serveResponse": {
          "tuple": {
             "old": {
                "serve": {
                   "serve": {
                      "Envelope": {
                         "Header": {
                            "header": {
                               "receiver": {
                                  "component": "Anonymous Client",
                                  "sent-to": "socket://127.0.0.1:4653/"
                               },
                               "sender": {
                                  "component": "cn=BPM Service Group,cn=soap nodes,o=AXAIN,cn=cordys,cn=CordysBOP4UAT,o=axa_sgp.axa-ap.intraxa",
                                  "reply-to": "cn=BPM Service Container,cn=BPM Service Group,cn=soap nodes,o=AXAIN,cn=cordys,cn=CordysBOP4UAT,o=axa_sgp.axa-ap.intraxa"
                               },
                               "msg-id": "005056B2-23FD-71E2-92BF-A1D9B263217E"
                            },
                            "bpm": {
                               "instance_id": "f4032a97-e9e9-4ed4-afa5-82af43ba7e36"
                            }
                         },
                         "Body": {
                            "processTPRequestResponse": {
                               "response": {
                                  "OrderNo": "VDIR011142",
                                  "QuoteNo": "QRN201304100000030",
                                  "PremiumSet": {
                                     "Cover": [
                                        {
                                           "Type": "Basic",
                                           "Name": "CarDamage",
                                           "Desc": "Car Damage",
                                           "Premium": "6020",
                                           "ExtraDetails": {
                                              "BreakUp": {
                                                 "BasicOD": "12541.06",
                                                 "Accessory": "0",
                                                 "BiFuel": "0",
                                                 "ODDeductible": "0",
                                                 "NCB": "2508.212"
                                              },
                                              "Deductible": "0"
                                           }
                                        },
                                        {
                                           "Type": "Basic",
                                           "Name": "ThirdPartyLiability",
                                           "Desc": "Third Party Liability",
                                           "Premium": "1160",
                                           "ExtraDetails": {
                                              "BreakUp": {
                                                 "TP": "1110",
                                                 "TPPD": "0",
                                                 "LLDriver": "50",
                                                 "TPBiFuel": "0"
                                              }
                                           }
                                        },
                                        {
                                           "Type": "Basic",
                                           "Name": "PAOwnerDriver",
                                           "Desc": "PA Owner Driver",
                                           "Premium": "100",
                                           "ExtraDetails": null
                                        },
                                        {
                                           "Type": "Basic",
                                           "Name": "PAFamily",
                                           "Desc": "PA Family",
                                           "Premium": "0",
                                           "ExtraDetails": {
                                              "PAFamilySI": "0"
                                           }
                                        },
                                        {
                                           "Type": "Addon",
                                           "Name": "DEPC",
                                           "Desc": "Depreciation Cover",
                                           "Premium": "2292.00",
                                           "SumInsured": null,
                                           "ExtraDetails": {
                                              "PLAN_ID": "317.0",
                                              "PLAN_CODE": "DB",
                                              "RATEPER": ".60",
                                              "RATEFLAG": "X",
                                              "FLATAMT": ".00",
                                              "FLATFLAG": null
                                           }
                                        },
                                        {
                                           "Type": "Addon",
                                           "Name": "INPC",
                                           "Desc": "Invoice Price Cover",
                                           "Premium": "1337.00",
                                           "SumInsured": null,
                                           "ExtraDetails": {
                                              "PLAN_ID": "336.0",
                                              "PLAN_CODE": "000000009999",
                                              "RATEPER": ".35",
                                              "RATEFLAG": "X",
                                              "FLATAMT": ".00",
                                              "FLATFLAG": null
                                           }
                                        },
                                        {
                                           "Type": "Addon",
                                           "Name": "AMBC",
                                           "Desc": "Ambulance Charges Cover",
                                           "Premium": "100.00",
                                           "SumInsured": "5000",
                                           "ExtraDetails": {
                                              "PLAN_ID": "282.0",
                                              "PLAN_CODE": "S5",
                                              "RATEPER": ".00",
                                              "RATEFLAG": null,
                                              "FLATAMT": "20.00",
                                              "FLATFLAG": "X"
                                           }
                                        },
                                        {
                                           "Type": "Addon",
                                           "Name": "HOSP",
                                           "Desc": "Hospital Cash Cover",
                                           "Premium": "500.00",
                                           "SumInsured": "1000",
                                           "ExtraDetails": {
                                              "PLAN_ID": "197.0",
                                              "PLAN_CODE": "HA",
                                              "RATEPER": ".00",
                                              "RATEFLAG": null,
                                              "FLATAMT": "100.00",
                                              "FLATFLAG": "X"
                                           }
                                        },
                                        {
                                           "Type": "Addon",
                                           "Name": "RSAC",
                                           "Desc": "Roadside Assistance Cover",
                                           "Premium": "365.00",
                                           "SumInsured": null,
                                           "ExtraDetails": {
                                              "PLAN_ID": "362.0",
                                              "PLAN_CODE": "0005000001009999",
                                              "RATEPER": ".00",
                                              "RATEFLAG": null,
                                              "FLATAMT": "365.00",
                                              "FLATFLAG": "X"
                                           }
                                        },
                                        {
                                           "Type": "Addon",
                                           "Name": "MEDI",
                                           "Desc": "Medical Expenses Cover",
                                           "Premium": "375.00",
                                           "SumInsured": "10000",
                                           "ExtraDetails": {
                                              "PLAN_ID": "210.0",
                                              "PLAN_CODE": "MA",
                                              "NOOFDAYS": null,
                                              "RATEPER": ".00",
                                              "RATEFLAG": null,
                                              "FLATAMT": "75.00",
                                              "FLATFLAG": "X"
                                           }
                                        }
                                     ],
                                     "ServiceTax": "1183.1012",
                                     "Discount": "-40"
                                  },
                                  "Session": {
                                     "SessionData": {
                                        "Index": "1",
                                        "InitTime": "Wed, 10 Apr 2013 17:18:05 GMT",
                                        "UserName": "pBazzar",
                                        "Password": "AZg3Q1SktWKLz0Os/H0MlAxFfI75pjnpKjn9xrV9vimyyS7/5Ilil/ftcP5oHxC7IFYLVF0C3MAJcIznwrZvDA==",
                                        "OrderNo": "NA",
                                        "QuoteNo": "NA",
                                        "Route": "INT",
                                        "Contract": "MTR",
                                        "Channel": "polbaz",
                                        "TransactionType": "Quote",
                                        "TransactionStatus": "Fresh",
                                        "ID": "136559671573517713888881",
                                        "UserAgentID": "2C000003",
                                        "Source": "2C000003"
                                     },
                                     "Vehicle": {
                                        "TypeOfBusiness": "TR",
                                        "AccessoryInsured": "Y",
                                        "AccessoryValue": "0",
                                        "BiFuelKit": {
                                           "IsBiFuelKit": "N",
                                           "BiFuelKitValue": "0",
                                           "ExternallyFitted": "N"
                                        },
                                        "DateOfRegistration": "2011-03-01T00:00:00.000",
                                        "RiskType": "FPV",
                                        "Make": "HYUNDAI",
                                        "Model": "I20 SPORTZ",
                                        "FuelType": "P",
                                        "Variant": "1.2",
                                        "IDV": "382000",
                                        "VehicleAge": "2",
                                        "CC": "1197",
                                        "PlaceOfRegistration": "Hyderabad",
                                        "SeatingCapacity": "5",
                                        "VehicleExtraTag01": null,
                                        "RegistrationNo": null,
                                        "ExShowroomPrice": "551752.00"
                                     },
                                     "Quote": {
                                        "ExistingPolicy": {
                                           "Claims": "0",
                                           "PolicyType": "Comprehensive",
                                           "EndDate": "2013-05-01T23:59:59.000",
                                           "NCB": "20"
                                        },
                                        "PolicyStartDate": "2013-05-02T00:00:00.000",
                                        "Deductible": "0",
                                        "PAFamilySI": "0",
                                        "AgentNumber": "2C000003",
                                        "DealerId": "580",
                                        "Premium": {
                                           "Discount": null
                                        },
                                        "SelectedCovers": {
                                           "CarDamageSelected": "True",
                                           "TPLiabilitySelected": "True",
                                           "PADriverSelected": "True",
                                           "ZeroDepriciationSelected": "True",
                                           "PAFamilyPremiumSelected": "False"
                                        },
                                        "PolicyEndDate": "2014-05-01T23:59:59.000"
                                     },
                                     "Client": {
                                        "ClientType": "Individual",
                                        "CltDOB": "19530904",
                                        "FinancierDetails": {
                                           "IsFinanced": "0"
                                        },
                                        "GivName": "Bharti2013041005180567",
                                        "SurName": null,
                                        "ClientExtraTag01": "ANDHRA PRADESH",
                                        "CityOfResidence": "Mehdipatnam",
                                        "EmailID": "pb@pb.com",
                                        "MobileNo": "9777777777",
                                        "RegistrationZone": "A"
                                     }
                                  }
                               }
                            }
                         }
                      }
                   }
                }
             }
          }
       }
    }
 }

 let a = test.Body.serveResponse.tuple.old.serve.serve.Envelope.Body.processTPRequestResponse.response.OrderNo;
 let b = test.Body.serveResponse.tuple.old.serve.serve.Envelope.Body.processTPRequestResponse.response.QuoteNo;
//  function rescursive(test,key){
//     let temp ;
//     if (test.hasOwnProperty(key)){
//         console.log(`1 ${key}`);
//         temp = test[key];
//         Object.keys(temp).forEach((key)=>{
//             console.log(`${key} : ${temp[key]}`);
//             if (temp.hasOwnProperty(key)){
//                 console.log(`2 ${key}`);
//                 temp = temp[key];
//                 Object.keys(temp).forEach((key)=>{
//                     console.log(`${key} : ${temp[key]}`);
//                 })
                
//             }
                     
//         })
//     }
//  }
//  Object.keys(test).forEach((key)=>{
//         rescursive(test,key);  
//      if (test.hasOwnProperty(key)){
//         let temp = test[key];
//         rescursive(temp,key);
//      }
     
// })


// (function *processData(test){
//     if (!test) { return; }
  
//     for (let i = 0; i< test.length; i++){
//       let val = test[i];
//       console.log(`${key} : ${test[key]}`);
//       yield val.key;
  
//       if (val.hasOwnProperty(key)) {
//         yield *processData(val.key);
//       }
//     }
// })();

function deepReduce(collection, fn, memo) {

    /**
     * @inner
     * @param  {*} value
     * @param  {String[]} path
     * @return {*}
     */
    function iterator(value, path) {
      var type = Object.prototype.toString.call(value);
      memo = fn(memo, value, path);
      if (type === '[object Array]') {
        for (var i = 0, len = value.length; i < len; i++) {
          iterator(value[i], path.concat(i));
        }
      } else if (type === '[object Object]') {
        for (var key in value) {
          iterator(value[key], path.concat(key));
        }
      }
      return memo;
    }
  
    return iterator(collection, []);
  
  }
//  console.log(deepReduce(test, function(memo, value, path) {
//     memo[path.join('.')] = value;
//     return memo;
//   }, {}));

// let test1 = deepReduce(test, function(memo, value, path) {
//     memo[path.join('.')] = value;
//     return memo;
// }, {});  
console.log(a.Cover);
//  Object.keys(a).forEach((key)=>{
//     console.log(` vig ${key} : ${a[key]}`);
//      if(a.hasOwnProperty(key)){
//          let temp = a[key];
//          console.log(`${key} : ${temp[key]}`);
//      }
// })

for (i in a.Cover) {
    for (j in a.Cover[i].Name) {
        console.log(`${a.Cover[i].Name[j]}`)
    }
}
