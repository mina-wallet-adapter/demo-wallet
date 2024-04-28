import { MinaStandardWallet, registerWallet } from '@mina-wallet-adapter/core';
import { adapter } from '$lib/adapter';

let registered = false;

export function register() {
	if (registered) return;
	registerWallet(new MinaStandardWallet({ adapterProps: adapter }));
	registered = true;
}
