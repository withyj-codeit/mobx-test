import { useStaticRendering } from 'mobx-react';

/* Server-Side-Render할 store 파일들을 import 합니다 */
import { AuthStore } from './AuthStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let stores:any = null;

function initializeStore(
  initialData = {
    authStore: {}
  }) {
    if (isServer) {
      return {
        authStore: new AuthStore(initialData.authStore)
      };
    }
    if (stores === null) {
      stores = {
        authStore: new AuthStore(initialData.authStore)
      };
    }
    return stores
  }

export {initializeStore}
