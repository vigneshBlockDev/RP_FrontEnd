// Variable Decalration
let Bharathi_Axia_Response;
let Royal_Sundaram_Response;
let Digit_Go_Response;


document.getElementById('VehicleSubmit').addEventListener('click',calculatePremium /*mockCheckPremium */);

(function modalShow(e){
    $(window).on('load', function () {
        $('#vehicleModalLong').modal('show');
    });
})();

(function getManufacturerDetails(){
    fetch("http://localhost:3000/api/xlstojson",{

    }).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log("ManufacturerResponse",data);
        //setManufacturerDetails(data);
    })
})();

function setManufacturerDetails(data){
    let output = '';
    data.forEach(function(post) {
        output += `<option>${post.title}</option>`;
      });
    document.getElementById('Manufacturer').innerHTML = output;  
}

function calculatePremium(){
    fetch("http://188.42.97.27:8082/calculatepremium",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //'x-access-token': token
            // 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IkxvZ2dlZCBpbiBzdWNjZXNzZnVsbHkiLCJ1c2VycyI6W3siX2lkIjoiNWExYmFhNTYyYzZiOTEzNzYzMmM3ZWVjIiwiZW1haWwiOiJhcnVuLmhvc3NhbWFuaUByYXBpZHF1YmUuY29tIiwicGFzc3dvcmQiOiJqWmFlNzI3SzA4S2FPbUtTZ09hR3p3dy9YVnFHci9QS0VnSU1ranJjYkpJPSIsInJhcGlkSUQiOiJCd2JNd0E2YjFIaEUxNC91TFdweVJXS3EzMytBVUJINnd6UjZtQzh0OUowPSIsInVzZXJPYmplY3QiOnsiZm5hbWUiOiJhcnVuIiwibG5hbWUiOiJob3NzYW1hbmkiLCJwaG9uZSI6IjkxODM2OTk2NDU4MiJ9LCJ1c2VydHlwZSI6IkRpcmVjdCBDbGllbnRzIiwib3RwIjoxMTAwLCJlbmNvZGVkTWFpbCI6IllYSjFiaTVvYjNOellXMWhibWxBY21Gd2FXUnhkV0psTG1OdmJRPT0iLCJjcmVhdGVkX2F0IjoiTW9uIE5vdiAyNyAyMDE3IDExOjMxOjU4IEdNVCswNTMwIChJU1QpIiwiY291bnQiOjAsIl9fdiI6MCwic3RhdHVzIjpbInBob25lIiwiZW1haWwiXX1dLCJpYXQiOjE1MTUwNTA3NDcsImV4cCI6MTUxNTExMDc0N30.xZ_K-mE7WfAszkFrGMATmm9EpCmtYgdOyydVL4HGPVk'

        },
        
        body: JSON.stringify({

          CALCULATEPREMIUMREQUEST: {
            authenticationDetails: {
              apiKey: "310ZQmv/bYJMYrWQ1iYa7s43084=",
              agentId: "RSAI"
            },
            proposerDetails: {
              title: "Ms",
              firstName: "testxerago",
              lastName: "vig",
              emailId: "vigneshprabha0209@gmail.com",
              mobileNo: "9940426878",
              dateOfBirth: "03/11/1987",
              occupation: "Student",
              nomineeName: "nomineename",
              nomineeAge: "43",
              relationshipWithNominee: "Cousin",
              guardianName: "guardianname",
              guardianAge: "54",
              relationshipwithGuardian: "Mother",
              permanentAddress1: "address1",
              permanentAddress2: "address2",
              permanentAddress3: "address3",
              permanentAddress4: "address4",
              permanentCity: "Chennai",
              permanentPincode: "600032",
              sameAdressReg: "No",
              ResidenceAddressOne: "addressone",
              ResidenceAddressTwo: "addresstwo",
              ResidenceAddressThree: "addressthree",
              ResidenceAddressFour: "addressfour",
              ResidenceCity: "Chennai",
              ResidencePinCode: "600034",
              strStdCode: "044",
              strPhoneNo: "2456984"
            },
            vehicleDetails: {
              vehicleModelCode: "ZWTV310",
              planOpted: "Flexi Plan",
              yearOfManufacture: "2017",
              drivingExperience: "1",
              voluntaryDeductible: "0",
              vehicleManufacturerName: "TVS",
              idv: "65478",
              policyStartDate: "17/08/2018",
              vehicleMostlyDrivenOn: "Roads",
              vehicleRegDate: "17/08/2018",
              vehicleRegisteredInTheNameOf: "Company",
              modelName: "APACHE RTR ABS-2 Seater",
              productName: "BrandNewTwoWheeler",
              companyNameForCar: "xerago",
              engineNumber: "565465466",
              chassisNumber: "5654656",
              isTwoWheelerFinanced: "No",
              vehicleSubLine: "motorCycle",
              fuelType: "Petrol",
              automobileAssociationMembership: "No",
              region: "East Region",
              carRegisteredCity:"24PARGANAS",
              averageMonthlyMileageRun: "1000",
              engineCapacityAmount: "153 CC",
              personalAccidentCoverForUnnamedPassengers: "50000",
              accidentCoverForPaidDriver: "50000",
              legalliabilityToPaidDriver: "Yes",
              legalliabilityToEmployees: "Yes",
              cover_elec_acc: "Yes",
              nonElectricalAccesories: {
                nonelectronicAccessoriesDetails: {
                  NameOfElectronicAccessories: "Tyre",
                  MakeModel: "TVS",
                  Value: "345"
                }
              },
              electricalAccessories: {
                electronicAccessoriesDetails: {
                  NameOfElectronicAccessories: "Headlight",
                  MakeModel: "Philips",
                  Value: "300"
                }
              }
            }
          }
          }),
                }).then((res)=>{
                    return res.json();
                }).then((data)=>{
                    console.log("RoyalSundaramResponse",data);
                    ProcessRoyalSundaramResponse(data);

                    fetch("http://188.42.97.27:8082/bharathiquickquote",{
                        
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        
                        //'x-access-token': token
                    },
                    
                    body: JSON.stringify({

                 
                    Body: {
                       serve: {
                          SessionDoc: {
                             Session: {
                                SessionData: {
                                   Index: "1",
                                   InitTime: "Thu, 13 Apr 2017 16:55:39 GMT",
                                   UserName: "signMtr",
                                   Password: "AZg3Q1SktWKLz0Os/H0MlAxFfI75pjnpKjn9xrV9vimyyS7/5Ilil/ftcP5oHxC7IFYLVF0C3MAJcIznwrZvDA==",
                                   OrderNo: "NA",
                                   QuoteNo: "NA",
                                   Route: "INT",
                                   Contract: "MTR",
                                   Channel: "polbaz",
                                   TransactionType: "Quote",
                                   TransactionStatus: "Fresh",
                                   ID: "149208275275017943554968",
                                   UserAgentID: "2C000098",
                                   Source: "2C000098"
                                },
                                Vehicle: {
                                   TypeOfBusiness: "TR",
                                   AccessoryInsured: "N",
                                   NonElecAccessoryInsured: "N",
                                   AccessoryValue: "0",
                                   BiFuelKit: {
                                      IsBiFuelKit: "N",
                                      BiFuelKitValue: "0",
                                      ExternallyFitted: "N"
                                   },
                                   DateOfRegistration: "2014-04-01T00:00:00.000",
                                   DateOfManufacture: "2014-04-01T00:00:00.000",
                                   RiskType: "FTW",
                                   Make: "HERO MOTOR CORP",
                                   Model: "PASSION",
                                   FuelType: "P",
                                   Variant: "X PRO DRUM DISC SELF",
                                   IDV: "41208",
                                   VehicleAge: "4",
                                   CC: "110",
                                   PlaceOfRegistration: "Bettiah",
                                   SeatingCapacity: "2",
                                   VehicleExtraTag01: null,
                                   RegistrationNo: "BR22S3564",
                                   ExShowroomPrice: "52297",
                                   PaidDriver: "False"
                                },
                                Quote: {
                                   LLDriver: "false",
                                   ExistingPolicy: {
                                      Claims: "0",
                                      NCB: "35",
                                      PolicyType: "Comprehensive",
                                      EndDate: "2018-07-26T23:59:59.000"
                                   },
                                   PolicyStartDate: "2018-08-17T00:00:00.000",
                                   Deductible: "0",
                                   PAFamilySI: "0",
                                   AgentNumber: null,
                                   DealerId: null,
                                   Premium: {
                                      Discount: null
                                   },
                                   SelectedCovers: {
                                      CarDamageSelected: "True",
                                      PAFamilyPremiumSelected: [
                                         "true",
                                         "true"
                                      ],
                                      TPLiabilitySelected: "True",
                                      PADriverSelected: "True"
                                   },
                                   PolicyEndDate: "2019-07-17T23:59:59.000"
                                },
                                Client: {
                                   ClientType: "Individual",
                                   CltDOB: null,
                                   FinancierDetails: {
                                      IsFinanced: "0"
                                   },
                                   GivName: "TW238275707201704130455394890",
                                   SurName: null,
                                   ClientExtraTag01: "BIHAR",
                                   CityOfResidence: "Bettiah",
                                   EmailID: "pb@pb.com",
                                   MobileNo: "9777777777",
                                   RegistrationZone: "B"
                                }
                             }
                          }
                       }
                    }
                 }),
                }).then((res)=>{
                   return res.json();
                }).then((data) => {
                    console.log("BharathiAxiaResponse",data);
                    processBharathiAxiaResponse(data);

                    fetch('http://188.42.97.27:8082/digitgo2wquickquote',{
                        
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        
                        //'x-access-token': token
                    },
                    body: JSON.stringify({
                 
                        
                        "vehicle":{  
                            "isVehicleNew":false,
                            "idv":0,
                            "mainCode":"1113810107",
                            "licensePlate":"MH48AA1244",
                            "vehicleIdentificationNumber":"",
                            "engineNumber":"",
                            "permitAgency":"MH48",
                            "manufactureDate":"2016-05-01",
                            "initialRegistrationDate":"2016-05-09",
                            "hypothecation":{  
                               "isHypothecation":false,
                               "hypothecationAgency":"",
                               "hypothecationCIty":""
                            }
                         },
                         "previousInsurer":{  
                            "previousInsurerCode":"545",
                            "previousInsurerPolicyExpiryDate":"2018-07-10",
                            "claimInLastYear":false,
                            "previousNoClaimBonus":"TWENTY",
                            "previousInsurerPolicyNumber":"12460031011245"
                         },
                         "contract":{  
                            "insuranceProductCode":"20101",
                            "startDate":"2018-08-17",
                            "endDate":"2019-08-17",
                            "term":1,
                            "salesChannel":"ABSA",
                            "coverages":{  
                               "baseCover":{  
                                  "thirdPartyLiabilityCover":{  
                                     "selection":true
                                  },
                                  "ownDamageCover":{  
                                     "selection":true,
                                     "plan":"PLAN_C"
                                  },
                                  "theftCover":{  
                                     "selection":false
                                  },
                                  "fireCover":{  
                                     "selection":false
                                  }
                               },
                               "addOnCover":{  
                                  "partsDepreciationCover":{  
                                     "selection":false,
                                     "plan":"PLAN_C",
                                     "numberOfClaimsCovered":"ONE",
                                     "coPay":0
                                  },
                                  "engineAndGearBoxProtectionCover":{  
                                     "selection":false
                                  },
                                  "consumableCover":{  
                                     "selection":false
                                  },
                                  "breakdownAssistanceCover":{  
                                     "selection":false,
                                     "plan":"PLAN_C"
                                  },
                                  "returnToInvoiceCover":{  
                                     "selection":false
                                  },
                                  "tyreProtectCover":{  
                                     "selection":false,
                                     "tyreType":null
                                  }
                               },
                               "additionalCover":{  
                                  "otherDriverCover":{  
                                     "selection":true
                                  },
                                  "paUnnamedPersonCover":{  
                                     "selection":false,
                                     "insuredAmount":200000
                                  },
                                  "paOwnerDriverCover":{  
                                     "selection":true,
                                     "insuredAmount":20000
                                  }
                               },
                               "accessoriesCover":{  
                                  "electricalCover":{  
                                     "selection":false,
                                     "insuredAmount":128102
                                  },
                                  "nonElectricalCover":{  
                                     "selection":false,
                                     "insuredAmount":9120
                                  },
                                  "cngCover":{  
                                     "selection":false,
                                     "insuredAmount":0
                                  }
                               }
                            },
                            "voluntaryDeductible":"ZERO"
                         },
                         "pinCode":"400093",
                         "enquiryId":"20182013052033",
                         "security":{  
                            "webUserId":"25860711",
                            "password":"digit123"
                         }
                     
                       
            
                 
                    })
                
                    

                    }).then((res)=>{
                        return res.json();
                    }).then((data)=>{
                        console.log("digitgo2wquickquote",data);
                        processDigitGoResponse(data);
                        window.location.href = "../comparequote.html";

                        
                    }).catch((err)=>{
                        console.log(err);
                        
                    })
                }).catch((err)=>{
                    console.log(err);
                })
                }).catch((err)=>{
                    console.log(err);

                });

                
}

function ProcessRoyalSundaramResponse(data){
    Royal_Sundaram_Response = data.response;
    Royal_Sundaram_Response = JSON.parse(Royal_Sundaram_Response);
    const Royal_Sundaram_Message = Royal_Sundaram_Response.PREMIUMDETAILS.Status.Message;
    if(Royal_Sundaram_Message === "Premium Calculated and Quote Saved Successfully"){
       const RS_IDV = Royal_Sundaram_Response.PREMIUMDETAILS.DATA.IDV;
       const RS_QUOTE_ID = Royal_Sundaram_Response.PREMIUMDETAILS.DATA.QUOTE_ID;
       const RS_Premium =  Royal_Sundaram_Response.PREMIUMDETAILS.DATA.PREMIUM;
       const RS_LIABILITY =  Royal_Sundaram_Response.PREMIUMDETAILS.DATA.LIABILITY;
       const RS_O_Premium =Royal_Sundaram_Response.PREMIUMDETAILS.DATA;
       
       localStorage.setItem('RS_Response',Royal_Sundaram_Response.PREMIUMDETAILS.DATA);
       localStorage.setItem("RS_IDV",RS_IDV);
       localStorage.setItem("RS_QUOTE_ID",RS_QUOTE_ID);
       localStorage.setItem("RS_Premium",RS_Premium);
       localStorage.setItem("RS_LIABILITY",RS_LIABILITY);
       localStorage.setItem("RS_O_Premium",RS_O_Premium);
         
    }

}

function processBharathiAxiaResponse(data){
    let Bharathi_Axia_Response = data.response;
    Bharathi_Axia_Response  = JSON.parse(Bharathi_Axia_Response);
    const BA_Premium = TotalPremium=Bharathi_Axia_Response.Envelope.Body.serveResponse.tuple.old.serve.serve["SOAP:Envelope"]["SOAP:Body"].processTPRequestResponse.response.PremiumSet.PremiumDetails.TotalPremium;
    localStorage.setItem('BA_Response',Bharathi_Axia_Response);
    localStorage.setItem('BA_OrderNo',Bharathi_Axia_Response.Envelope.Body.serveResponse.tuple.old.serve.serve["SOAP:Envelope"]["SOAP:Body"].processTPRequestResponse.response.OrderNo.$t);
    localStorage.setItem('BA_QuoteNo',Bharathi_Axia_Response.Envelope.Body.serveResponse.tuple.old.serve.serve["SOAP:Envelope"]["SOAP:Body"].processTPRequestResponse.response.QuoteNo.$t);
    localStorage.setItem("BA_Premium",BA_Premium);
}

function processDigitGoResponse(data) {
    Digit_Go_Response = data.response;
    Digit_Go_Response = Digit_Go_Response;
    const DG_IDV = Digit_Go_Response.idv;
    const DG_EnquiryID = Digit_Go_Response.enquiryId;
    const DG_TotalPremium = Digit_Go_Response.totalGrossPremium;
    
    localStorage.setItem('DG_Response',Digit_Go_Response);
    localStorage.setItem("DG_IDV",DG_IDV);
    localStorage.setItem("DG_EnquiryID",DG_EnquiryID);
    localStorage.setItem('DG_TotalPremium',DG_TotalPremium);

    

    console.log("DG_IDV",DG_IDV);
    console.log("DG_EnquiryID",DG_EnquiryID);
    localStorage.setItem('DG_TotalPremium',DG_TotalPremium);
}
