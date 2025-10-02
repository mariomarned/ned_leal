class AsyncStorageMock {
  static async getItem(key) {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  }

  static async setItem(key, value) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  static async removeItem(key) {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key);
    }
  }

  static async clear() {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
  }
}

export default AsyncStorageMock;