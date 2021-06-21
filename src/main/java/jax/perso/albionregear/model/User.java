package jax.perso.albionregear.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private final String pseudo;
    private final String email;

    public User(String pseudo, String url) {
        this.pseudo = pseudo;
        this.email = url;
    }

    public User() {
        this.pseudo = null;
        this.email = null;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", pseudo='" + pseudo + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
