'use strict';

export default {
  /**
   * Leaky Relu Activation, aka Leaky Rectified Linear Unit Activation
   * @description https://en.wikipedia.org/wiki/Rectifier_(neural_networks)
   * @param weight
   * @returns {number}
   */
  activate: function activate(weight) {
    return weight > 0 ? weight : 0.01 * weight;
  },

  /**
   * Leaky Relu derivative
   * @param weight
   * @param delta
   * @returns {number}
   */
  derivative: function derivative(weight, delta) {
    return weight > 0 ? delta : 0.01 * delta;
  }
};