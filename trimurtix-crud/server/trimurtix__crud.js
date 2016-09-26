/*
 *
 * @ trimurtix__crud - v0.0.4
 * Autor: Alisson Alexandre
 *
 */

Meteor.trimurtix__crud = {

	/*
        Insere registro na collection escolhida

        @data[0] => definicao se eh 0 = insert/ 1 = update/ 2 = remove
        @data[1] => nome da collection
        @data[2..n] => dados da collection, seguindo na mesma ordem em que o schema foi criado

    */
	insert: function(data){

		index = 2;
		var insert = {};

		// valida se esta com definicao correta como 0 (zero)
        if (typeof data === "undefined" || data === '' || data[0] !== 0) {
            return [Meteor.call('getMsgFeedback', 'errorSystem', '000')];
        // valida se o nome da collection foi declarada
        } else if (typeof data[1] === "undefined" || data[1] === '') {
            return [Meteor.call('getMsgFeedback', 'errorSystem', '011')];
        }

        // array dos dados do schema, pega as chaves do schema e preenche o objeto insert
        for (var field in Meteor.collectionsObject[data[1]]._c2._simpleSchema._schema) {
            if (field.indexOf('.$') > -1) {
                break;
            } else {
                insert[field] = data[index];
                index++;
            }
        }

        try {
            // verifica se os dados estao corretos e manda o feedback para o usuario, com o id de registro
            check(insert, Meteor.collectionsObject[data[1]].simpleSchema());
            return [Meteor.call('getMsgFeedback', 'sucess', '000'), Meteor.collectionsObject[data[1]].insert(insert, { validate: true })];
        } catch (exceptionMessage) {
            var mongoException = Meteor.call('mongoException', exceptionMessage.stack);
            if(mongoException[0] !== 'erro'){
            	Meteor.trimurtix__msgFeedback.data = [mongoException[2], mongoException[1]];
            	return [Meteor.call('getMsgFeedback', 'errorMongo', mongoException[0])];
        	}else{
        		return [Meteor.call('getMsgFeedback', 'errorSystem', '000')];
            }
        }
	},

	/*
        Remove registro na collection escolhida

        @data[0] => definicao se eh 0 = insert/ 1 = update/ 2 = remove
        @data[1] => nome da collection
        @data[2] => id do registro

    */
	remove: function(data){

		check(data[2], String);

		// valida se esta com definição correta como 2 (dois)
        if (typeof data === "undefined" || data === '' || data[0] !== 2) {
            return Meteor.call('getMsgFeedback', 'errorSystem', '000');
        // valida se o nome da collection foi declarada
        } else if (typeof data[2] === "undefined" || data[2] === '') {
            return Meteor.call('getMsgFeedback', 'errorSystem', '005');
        // valida se o id do registro foi definido
        } else if (typeof data[1] === "undefined" || data[1] === '') {
            return Meteor.call('getMsgFeedback', 'errorSystem', '011');
        }

        Meteor.collectionsObject[data[1]].remove(data[2]);
        return [Meteor.call('getMsgFeedback', 'sucess', '002')];
	},

	/*
        Atualiza registro na collection escolhida

        @data[0] => definicao se eh 0 = insert/ 1 = update/ 2 = remove
        @data[1] => nome da collection
        @data[2] => id do registro
        @data[3] => dados no formato json literal para serem alterados. Ex: {campo do schema: valor}

    */
	update: function(data){
		// valida se esta com definicao correta como 1 (um)
        if (typeof data === "undefined" || data === '' || data[0] !== 1) {
            return Meteor.call('getMsgFeedback', 'errorSystem', '000');
        // valida se esta definido o nome da collection
        } else if (typeof data[1] === "undefined" || data[1] === '') {
            return Meteor.call('getMsgFeedback', 'errorSystem', '011');
        // valida se esta definido o id do registro
        } else if (typeof data[2] === "undefined" || data[2] === '') {
            return Meteor.call('getMsgFeedback', 'errorSystem', '005');
        // valida se os dados de alteração foram definidos
        } else if (typeof data[3] === "undefined" || data[3] === '') {
            return Meteor.call('getMsgFeedback', 'errorSystem', '012');
        }

        try {
            // verifica se os dados estao corretos e manda o feedback para o usuario, com o id de registro
            check(data[3], Meteor.collectionsObject[data[1]].simpleSchema());
            Meteor.collectionsObject[data[1]].update({_id: data[2] }, { $set: data[3] });
            return [Meteor.call('getMsgFeedback', 'sucess', '001')];
        } catch (exceptionMessage) {
            var mongoException = Meteor.call('mongoException', exceptionMessage.stack);
            if(mongoException[0] !== 'erro'){
            	Meteor.trimurtix__msgFeedback.data = [mongoException[2], mongoException[1]];
            	return [Meteor.call('getMsgFeedback', 'errorMongo', mongoException[0])];
            }else{
            	return [Meteor.call('getMsgFeedback', 'errorSystem', '000')];
        	}
        }
	}
};

Meteor.methods({
    'crud': function(data) {
    	var crudAction = [
    		'insert',
    		'update',
    		'remove'
    	]

    	if(typeof data === "undefined" || data === '' || data[0] > 3 || data[0] < 0){
    		return [Meteor.call('getMsgFeedback', 'errorSystem', '000')];
    	}

    	if(typeof Meteor.trimurtix__crud[crudAction[data[0]]] !== "undefined"){
				return Meteor.trimurtix__crud[crudAction[data[0]]](data);
			}
    }
});
