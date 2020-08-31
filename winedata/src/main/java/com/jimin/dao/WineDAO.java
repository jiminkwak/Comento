package com.jimin.dao;

import java.util.List;



import com.jimin.vo.AvgVO;
import com.jimin.vo.FreeTotalVO;
import com.jimin.vo.QualityVO;
import com.jimin.vo.WineVO;
import com.jimin.vo.FixedVolVO;

public interface WineDAO {
	public List<WineVO> selectWine() throws Exception;
	public List<AvgVO> selectAvg() throws Exception;
	public List<QualityVO> selectQuality() throws Exception;
	public List<FreeTotalVO> selectFreeTotal() throws Exception;
	public List<FixedVolVO> selectFixedVol() throws Exception;
}
