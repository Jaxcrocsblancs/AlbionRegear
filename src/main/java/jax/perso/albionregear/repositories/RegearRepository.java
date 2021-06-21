package jax.perso.albionregear.repositories;

import jax.perso.albionregear.model.Regear;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegearRepository extends CrudRepository<Regear, Long> {}