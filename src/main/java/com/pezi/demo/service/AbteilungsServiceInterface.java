package com.pezi.demo.service;

import java.util.List;

import com.pezi.demo.model.Abteilung;

public interface AbteilungsServiceInterface {

    // create
    public Abteilung createAbteilung(Abteilung abteilung);

    // read
    public Abteilung getAbteilungById(int id);

    public List<Abteilung> getAllAbteilungen();

    // update
    public String updateAbteilung(Abteilung abteilung);

    // delete
    public String deleteAbteilungById(int id); // String Zurückgabe für Debugzwecke auf Postman-Seite

}
