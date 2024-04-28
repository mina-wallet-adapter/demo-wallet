<script lang="ts">
	import { shortenAddress } from '@mina-wallet-adapter/core';
	import { account } from '$lib/adapter';
	const { label, icon, address } = account;
</script>

<div>
	<img src={icon} alt={`${label} icon`} />
	<h1>{label}</h1>
</div>
<div>
	<p>
		This is a reference implementation of a Mina Wallet supporting Wallet Standard. It showcases how
		the <b>Mina Wallet Adapter</b> can be easily integrated into existing or new wallets within the Mina
		Protocol ecosystem.
	</p>
	<p>
		<strong>Wallet Address:</strong>
		{shortenAddress(address)}
	</p>
</div>
