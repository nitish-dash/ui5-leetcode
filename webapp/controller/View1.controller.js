sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

            },
            onSubmitPress: function() {
                var s=this.getView().byId("inp1").getValue();
                sap.m.MessageToast.show("success");
                var oRomanKey = {
                    "I": 1,
                    "V": 5,
                    "X": 10,
                    "L": 50,
                    "C": 100,
                    "D": 500,
                    "M": 1000,
                };
                var aRoman = [];
                var sum = 0;
                aRoman = s.split("");
                for (var i = 0; i<aRoman.length; i++){
                    if (i!==0){
                        var j = aRoman[i-1];
                            if(aRoman[i]==="V" && j==="I"){
                                sum = sum + 3;
                            }else if(aRoman[i]==="X" && j==="I"){
                                sum = sum + 8;
                            }else if(aRoman[i]==="L" && j==="X"){
                                sum = sum + 30;
                            }else if(aRoman[i]==="C" && j==="X"){
                                sum = sum + 80;
                            }else if(aRoman[i]==="D" && j==="C"){
                                sum = sum + 300;
                            }else if(aRoman[i]==="M" && j==="C"){
                                sum = sum + 800;
                            }else{
                            sum = sum + oRomanKey[aRoman[i]];}
                        }else{
                            sum = sum + oRomanKey[aRoman[i]];
                    }
                }
                sum = JSON.stringify(sum);
                sap.m.MessageBox.show(sum);
            },
            onTwoSumPress: function() {
                let map = new Map();
                var nums = JSON.parse(this.getView().byId("inp2").getValue());
                var target = parseInt(this.getView().byId("inp3").getValue());
                // for(let i = 0; i < nums.length; i ++) {
                //     if(map.has(target - nums[i])) {
                //         sap.m.MessageBox.show([map.get(target - nums[i]), i]);
                //     } else {
                //         map.set(nums[i], i);
                //     }
                // }
                // return sap.m.MessageBox.show([]);
                let hash = {};
                for (let i = 0; i < nums.length; i++) {
                    const n = nums[i];
                    if (hash[target - n] !== undefined) {
                        sap.m.MessageBox.show([hash[target - n], i].toString()) ;
                    }
                    hash[n] = i;
                }
                return [];
            }
        });
    });
