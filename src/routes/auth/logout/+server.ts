import { redirect } from '@sveltejs/kit';

export const GET = async ({ locals: { supabase } }) => {
	// logout of supabase
	console.log('BRO WHAT IS WRONG WITH YOU');
	await supabase.auth.signOut();

	throw redirect(301, '/');

	// console.log('WHAT THE ');

	// return new Response();
};
