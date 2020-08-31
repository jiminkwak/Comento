package com.jimin.dao;

import java.util.List;


import com.jimin.vo.MovieVO;

public interface MovieDAO {
	public List<MovieVO> selectMovie() throws Exception;
}
