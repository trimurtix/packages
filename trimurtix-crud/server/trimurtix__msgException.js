/*
 *
 * @ trimurtix__msgException - v0.0.3
 * Autor: Alisson Alexandre
 * 
 */

Meteor.trimurtix__msgException = {};

Meteor.startup(function() {

    SimpleSchema.messages({
        required: "error schema :: created by :: 002 $c2_[label] : { : [label] } is required",
        minString: "error schema :: created by :: 003 $c2_[label] : { : [min] } must be at least min characters",
        maxString: "error schema :: created by :: 004 $c2_[label] : { : [max] } cannot exceed max characters",
        minNumber: "[label] must be at least [min]", // falta definir como utilizar
        maxNumber: "[label] cannot exceed [max]", // falta definir como utilizar
        minDate: "[label] must be on or after [min]", // falta definir como utilizar
        maxDate: "[label] cannot be after [max]", // falta definir como utilizar
        badDate: "[label] is not a valid date", // falta definir como utilizar
        minCount: "error schema :: created by :: 005 $c2_[label] : { : [minCount] } You must specify at least minCount values",
        maxCount: "error schema :: created by :: 006 $c2_[label] : { : [maxCount] } You cannot specify more than maxCount values",
        noDecimal: "[label] must be an integer", // falta definir como utilizar
        notAllowed: "[value] is not an allowed value",
        expectedString: "error schema :: created by :: 007 $c2_[label] : { : [label] } must be a string",
        expectedNumber: "error schema :: created by :: 008 $c2_[label] : { : [label] } must be a number",
        expectedBoolean: "error schema :: created by :: 009 $c2_[label] : { : [label] } must be a boolean",
        expectedArray: "error schema :: created by :: 010 $c2_[label] : { : [label] } must be an array",
        expectedObject: "error schema :: created by :: 011 $c2_[label] : { : [label] } must be an object",
        expectedConstructor: "[label] must be a [type]", // falta definir como utilizar
        regEx: [
            { msg: "[label] failed regular expression validation" },
            { exp: SimpleSchema.RegEx.Email, msg: "error schema :: created by :: 001 $c2_[label] : { : [label] } must be a valid e-mail address" },
            { exp: SimpleSchema.RegEx.WeakEmail, msg: "error schema :: created by :: 001 $c2_[label] : { : [label] } must be a valid e-mail address" },
            { exp: SimpleSchema.RegEx.Domain, msg: "error schema :: created by :: 001 $c2_[label] : { : [label] } must be a valid domain" },
            { exp: SimpleSchema.RegEx.WeakDomain, msg: "error schema :: created by :: 001 $c2_[label] : { : [label] } must be a valid domain" },
            { exp: SimpleSchema.RegEx.IP, msg: "error schema :: created by :: 001 $c2_[label] : { : [label] } must be a valid IPv4 or IPv6 address" },
            { exp: SimpleSchema.RegEx.IPv4, msg: "error schema :: created by :: 001 $c2_[label] : { : [label] } must be a valid IPv4 address" },
            { exp: SimpleSchema.RegEx.IPv6, msg: "error schema :: created by :: 001 $c2_[label] : { : [label] } must be a valid IPv6 address" },
            { exp: SimpleSchema.RegEx.Url, msg: "error schema :: created by :: 001 $c2_[label] : { : [label] } must be a valid URL" },
            { exp: SimpleSchema.RegEx.Id, msg: "error schema :: created by :: 001 $c2_[label] : { : [label] } must be a valid alphanumeric ID" }
        ],
        keyNotInSchema: "error schema :: created by :: 012 $c2_[key] : { : [label] } is not allowed by the schema" // falta definir como utilizar
    });

});

Meteor.methods({
    /*
        Trata a mensagem de critica do banco de dados mongoDB

        @mongoException[0] => codigo da excessao
        @mongoException[1] => nome do campo
        @mongoException[2] => valor do campo

    */
    'mongoException': function(msgErrorException) {
        var mongoException = (!msgErrorException) ? ['erro :: erro :: erro', '$c2_erro', 'erro: { :erro'] : [];
        mongoException[0] = (((msgErrorException).split(' :: '))[2].split(' '))[0];
        mongoException[1] = (((msgErrorException).split('$c2_'))[1].split(' '))[0];
        mongoException[2] = (((msgErrorException).split(': { :'))[1].split(' '))[1];

        return mongoException;
    }
});