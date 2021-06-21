package jax.perso.albionregear.controllers;

import jax.perso.albionregear.model.Regear;
import jax.perso.albionregear.repositories.RegearRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RegearController {

    private final RegearRepository regearRepository;

    public RegearController(RegearRepository regearRepository) {
        this.regearRepository = regearRepository;
    }

    @GetMapping("/regear")
    public List<Regear> getRegear() {
        return (List<Regear>) regearRepository.findAll();
    }

    @PostMapping("/regear")
    void addRegear(@RequestBody Regear regear) {
        regearRepository.save(regear);
    }
}