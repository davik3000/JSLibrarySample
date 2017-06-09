/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.MyExperiment = {
    name: "",
    type: "",
    getName: function () {
        return name;
    },
    getType: function () {
        return type;
    }
}

var myExp = new window.MyExperiment();
var name = myExp.getName();
var type = myExp.getType();