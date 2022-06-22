<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Mail\NewContact;
use Illuminate\Support\Facades\Mail; // oggetto che ti permette effettivamente di inviare il form
use Illuminate\Support\Facades\Validator;
use App\Lead;

class ContactsController extends Controller
{
    //
    public function store(Request $request){

        $data = $request->all();
        // validazione senza effettuare rimbalzo in automatico, verifichi l'esito attraverso quello restituisce il validator
        $validator = Validator::make($data, [
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required'
        ]);
        if($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ]);
        }

        $lead = new Lead();
        $lead->fill($data);
        $lead->save();

        Mail::to('info@boolpress.it')->send(new NewContact($lead));
        return response()->json([
            'success' => true,
        ]);
    }
}
