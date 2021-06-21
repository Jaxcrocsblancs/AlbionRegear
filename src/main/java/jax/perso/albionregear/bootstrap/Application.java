package jax.perso.albionregear.bootstrap;

import jax.perso.albionregear.model.Regear;
import jax.perso.albionregear.model.User;
import jax.perso.albionregear.repositories.RegearRepository;
import jax.perso.albionregear.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class Application {
    //aze
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner init(RegearRepository regearRepository) {
        return args -> {
            Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
                Regear regear = new Regear(name, "https://albiononline.com/fr/killboard/kill/258103951", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png" );
                regearRepository.save(regear);
            });
            regearRepository.findAll().forEach(System.out::println);
        };
    }


}