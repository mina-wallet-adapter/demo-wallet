export { account, adapter };

import { MINA_CHAINS } from '@mina-wallet-adapter/core';
import type {
	Signed,
	SignableData,
	SignedAny,
	StandardWalletAdapterProps,
	WalletName
} from '@mina-wallet-adapter/core';
import type { WalletIcon, WalletAccount } from '@wallet-standard/base';

const name = 'Mina Demo Wallet' as WalletName;
const url = 'https://github.com/mina-wallet-adapter/demo-wallet/';
const icon: WalletIcon =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAABGklEQVR4AWLQxQMolgTUSocwEsJAFEDrEbWIpqJJzSQjT60muJM4DPoS7Ko1Z1DVGDx6FV6sR6Nw+NT/KyXcklSvaue/Ju00Y8w11OaKyvXqbWro9BupAn7saeYBFPSPeb3MTtBhJPp5LfWJqluEGDamaDfvhNju5kAqsEhzxyx3zJZwQ7bhiyLqPiBViDWVwI0COhNRjQHZAK09XiM5YK8vKHw8rAf4LMFsxaiY8ykUCeYvvHJmOWPKE1RPrJL3eNAJGgcvQg38mgRtC+RMDNQ2QSqAgmxsN0GW++ebx95JimFxRg/7e1JkOY1CPEfJKe5R530r+Ypnh8y2Ab4posdwIJVNFSNWvdNxQ3VTUEQmG+06Z0f0oaH+Ay1m+7aiCGjaAAAAAElFTkSuQmCC' as const;

const account: WalletAccount = {
	address: 'B62qpge4uMq4Vv5Rvc8Gw9qSquUYd6xoW1pz7HQkMSHm6h1o7pvLPAN',
	publicKey: new Uint8Array([1, 2, 3]),
	chains: MINA_CHAINS,
	features: [],
	icon,
	label: name
};

const adapter: StandardWalletAdapterProps = {
	name,
	icon,
	url,
	connect: async () => account,
	disconnect: async () => {},
	signMessage: async (message: string) => <Signed<string>>{},
	signTransaction: async (transaction: SignableData) => <SignedAny>{},
	sendTransaction: async (transaction: SignedAny) => undefined,
	signAndSendTransaction: async (transaction: SignableData) => undefined
};
