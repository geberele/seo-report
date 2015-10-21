/**
 * Store.
 */
var EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = 'change';

class Store {

  /**
   * Implements constructor().
   */
  constructor() {
    // Event emitter.
    this.ee = new EventEmitter();
    // Register actions.
    this.registerActions();
  }

  /**
   * Register actions to handle all updates.
   */
  registerActions() {}

  /**
   * Emits an event.
   */
  emitChange() {
    this.ee.emit(CHANGE_EVENT);
  }

  /**
   * Adds a listener for CHANGE_EVENT event.
   *
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.ee.on(CHANGE_EVENT, callback);
  }

  /**
   * Removes the listener for CHANGE_EVENT event.
   *
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.ee.removeListener(CHANGE_EVENT, callback);
  }

}

export default Store;
