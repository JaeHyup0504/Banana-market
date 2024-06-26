'use strict';
const {
  Model, ForeignKeyConstraintError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Article.belongsToMany(models.User, {
        through: 'UserArticles',
        foreignKey: 'article_id',
        // onUpdate: 'CASCADE', 
        // onDelete: 'CASCADE', 
        // sourceKey: 'id'  
      })
      models.Article.belongsTo(models.Category, {
        foreignKey: 'category_id', 
        // onDelete: 'CASCADE',
        // onUpdate: 'CASCADE'
      })
      models.Article.belongsTo(models.Region, {
        foreignKey: 'region_id',
        // onUpdate: 'CASCADE',
      })
      models.Article.hasMany(models.Chat, {
        foreignKey: 'article_id',
        // onDelete: 'CASCADE',
        // onUpdate: 'CASCADE'
        constraint: true
      })
    }
  }
  Article.init({
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: { 
      type: DataTypes.BLOB
    },
    content: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    market: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    region_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: { 
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_mate: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    current_mate: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    trade_type: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: { 
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};