package com.pezi.demo.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "mitarbeiter")
public class Mitarbeiter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mitarbeiterId;

    @NotNull
    @Lob
    private String mitarbeiterVorname;

    @NotNull
    @Lob
    private String mitarbeiterNachname;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "abteilungsId" /* , nullable = false */)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Abteilung abteilung;

    // Getters and Setters

    public int getMitarbeiterId() {
        return mitarbeiterId;
    }

    public void setMitarbeiterId(int mitarbeiterId) {
        this.mitarbeiterId = mitarbeiterId;
    }

    public String getMitarbeiterVorname() {
        return mitarbeiterVorname;
    }

    public void setMitarbeiterVorname(String mitarbeiterVorname) {
        this.mitarbeiterVorname = mitarbeiterVorname;
    }

    public String getMitarbeiterNachname() {
        return mitarbeiterNachname;
    }

    public void setMitarbeiterNachname(String mitarbeiterNachname) {
        this.mitarbeiterNachname = mitarbeiterNachname;
    }

    public Abteilung getAbteilung() {
        return abteilung;
    }

    public void setAbteilung(Abteilung abteilung) {
        this.abteilung = abteilung;
    }

}