/**
 * User.js
 *
 * A user who can log in to this application.
 */

 module.exports = {

    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
      id: { 
          type: 'number', 
          autoIncrement: true, 
          unique: true,
          columnName: 'charity_id' 
      },

      title: {
        type: 'string',
        required: true,
        maxLength: 200
      },

      description: {
        type: 'string',
        required: true,
        maxLength: 200,
        columnType: 'text'
      },

      followers: {
        type: 'number',
      },

      approved: {
        type: 'string',
      },
  
      donations: {
        type: 'number',
      },
  
      status: {
        type: 'string',
      },

      post_id: {
        type: 'number',
        columnType: 'INT'
      },

      user_id_founder :{
          model: 'user'
      },

      users: {
        collection: 'user',
        via : 'charity_id',
        through: 'follow'
      },

      users: {
        collection: 'user',
        via : 'charity_id',
        through: 'donation'
      },

      categories: {
        collection: 'charity',
        via : 'charity_id',
        through: 'categoryCharity'
      }


  
      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
      // n/a
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      // n/a
  
    },
  
  
  };
  