'use strict';

module.exports = {
    up: function up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('auth_users', [{
            first_name: 'eGO',
            last_name: 'Super User',
            email: 'admin@ego.com',
            password: '﻿25d55ad283aa400af464c76d713c07ad'
        }, {
            first_name: 'Nicolas',
            last_name: 'Tesla',
            email: 'nic@gmail.com',
            password: '﻿25d55ad283aa400af464c76d713c07ad'
        }], {});
    },

    down: function down(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
           Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
//# sourceMappingURL=20180204011706-auth_users.js.map