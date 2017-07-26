/*
 *
 * @ trimurtix__msgFeedback - v0.0.3
 * Autor: Alisson Alexandre
 * 
 */

/*
    Define as mensagens de feedback para os usuarios

    @type = tipo de erro:
    @errorSystem -> erro genericos do systema
    @errorMongo -> erro genericos do banco mongoDB
    @sucess -> mensagens genericas para sucesso
    @code = codigo do erro, independente do tipo
    @data = Mensagens expecificas para completar as mensagens genericas , independente do tipo
*/
Meteor.trimurtix__msgFeedback = {
	data: [0,1],
    errorSystem: {
        '000': 'Conteúdo inválido.',
        '001': 'Necessário conter o nome.',
        '002': 'Necessário conter a descrição.',
        '003': 'Necessário conter a imagem de avatar.',
        '004': 'Necessário conter a imagem de folder',
        '005': 'Necessário conter o ID do conteúdo.',
        '006': 'Necessário conter a mensagem.',
        '007': 'Necessário conter o status.',
        '008': 'Necessário conter email/senha ou rede social.',
        '009': 'Necessário conter um programa.',
        '010': 'Necessário conter pelo menos um dia da semana.',
        '011': 'Necessário conter o nome da coleção.',
        '012': 'Necessário adicionar os campos obrigatórios.'
    },
    errorMongo: {
        // erros schemas
        '001': 'O valor do campo "' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[1] : 'undefined') + '" está inválido.',
        '002': 'O campo "' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[1] : 'undefined') + '" é obrigatório',
        '003': 'O campo "' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[1] : 'undefined') + '" deve conter no mínimo ' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[0] : 'undefined') + ' caracteres.',
        '004': 'O campo "' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[1] : 'undefined') + '" deve conter no máximo ' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[0] : 'undefined') + ' caracteres.',
        '005': 'O campo "' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[1] : 'undefined') + '" deve conter no mínimo ' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[0] : 'undefined') + ' valores.',
        '006': 'O campo "' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[1] : 'undefined') + '" deve conter no máximo ' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[0] : 'undefined') + ' valores.',
        '007': 'O campo "' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[1] : 'undefined') + '" deve conter somente texto.',
        '008': 'O campo "' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[1] : 'undefined') + '" deve conter somente números.',
        '009': 'O campo "' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[1] : 'undefined') + '" deve conter somente verdadeiro ou falso.',
        '010': 'O campo "' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[1] : 'undefined') + '" deve conter somente vetores.',
        '011': 'O campo "' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[1] : 'undefined') + '" deve conter somente objetos.',
        '012': 'O campo "' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[1] : 'undefined') + '" não pertence ao Schema atual.',

        // erros mongoDB
        '11000': 'O valor ' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[0] : 'undefined') + ' para o campo "' + ((typeof Meteor.trimurtix__msgFeedback !== "undefined")? Meteor.trimurtix__msgFeedback.data[1] : 'undefined') + '" já possui registro.'
    },

    sucess: {
        '000': 'Registro efetuado com sucesso.',
        '001': 'Atualização efetuada com sucesso.',
        '002': 'Remoção efetuada com sucesso.'
    }
};

Meteor.methods({

    getMsgFeedback: function(type, code, data){
        if (typeof type === "undefined" || typeof code === "undefined") {
            return Meteor.call('getMsgFeedback', 'errorSystem', '000');
        } else if (typeof data === "undefined") {
            data = [0, 1];
        }

        return Meteor.trimurtix__msgFeedback[type][code];
    }

});